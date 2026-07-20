// Function privada de agenda/financeiro — Carla Thomas Psicóloga
// Armazena consultas usando Netlify Blobs (nativo, sem serviço externo).
// Protegida por senha (variável de ambiente ADMIN_PASSWORD, configurada no Netlify).

const { getStore, connectLambda } = require("@netlify/blobs");

const STORE_NAME = "agenda-consultas";
const KEY = "appointments";

function checkAuth(event) {
  const senha = event.headers["x-admin-password"] || "";
  const esperado = process.env.ADMIN_PASSWORD || "";
  return esperado.length > 0 && senha === esperado;
}

function json(status, body) {
  return {
    statusCode: status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

exports.handler = async function (event) {
  connectLambda(event);

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, X-Admin-Password",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
      body: "",
    };
  }

  if (!checkAuth(event)) {
    return json(401, { erro: "Senha inválida ou não configurada." });
  }

  const store = getStore(STORE_NAME);

  try {
    let lista = (await store.get(KEY, { type: "json" })) || [];

    if (event.httpMethod === "GET") {
      return json(200, lista);
    }

    if (event.httpMethod === "POST") {
      const dados = JSON.parse(event.body || "{}");
      const novo = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        paciente: dados.paciente || "",
        telefone: dados.telefone || "",
        data: dados.data || "",
        hora: dados.hora || "",
        valor: Number(dados.valor) || 0,
        status: dados.status || "pendente",
        observacoes: dados.observacoes || "",
        criadoEm: new Date().toISOString(),
      };
      lista.push(novo);
      await store.setJSON(KEY, lista);
      return json(201, novo);
    }

    if (event.httpMethod === "PUT") {
      const dados = JSON.parse(event.body || "{}");
      if (!dados.id) return json(400, { erro: "id é obrigatório" });
      let encontrado = false;
      lista = lista.map((item) => {
        if (item.id === dados.id) {
          encontrado = true;
          return { ...item, ...dados };
        }
        return item;
      });
      if (!encontrado) return json(404, { erro: "Consulta não encontrada" });
      await store.setJSON(KEY, lista);
      return json(200, { ok: true });
    }

    if (event.httpMethod === "DELETE") {
      const id = (event.queryStringParameters || {}).id;
      if (!id) return json(400, { erro: "id é obrigatório" });
      lista = lista.filter((item) => item.id !== id);
      await store.setJSON(KEY, lista);
      return json(200, { ok: true });
    }

    return json(405, { erro: "Método não suportado" });
  } catch (e) {
    return json(500, { erro: "Erro interno", detalhe: String(e) });
  }
};
