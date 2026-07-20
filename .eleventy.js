module.exports = function (eleventyConfig) {
  // Apenas Nunjucks e Markdown são processados; o resto é copiado como está.
  eleventyConfig.setTemplateFormats(["njk", "md"]);

  // Assets e painel admin copiados sem alteração
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });

  // Páginas estáticas (mantidas exatamente como estão)
  const paginas = [
    "index.html", "sobre.html", "psicoterapia.html", "ebook.html",
    "materiais.html", "contato.html", "obrigado.html", "obrigado-ebook.html",
    "agenda-carla.html"
  ];
  paginas.forEach(function (p) {
    eleventyConfig.addPassthroughCopy({ ["src/" + p]: p });
  });

  // Coleção de posts do blog (mais recentes primeiro)
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByTag("post").sort(function (a, b) {
      return b.date - a.date;
    });
  });

  // Filtro de data amigável (pt-BR)
  eleventyConfig.addFilter("dataBR", function (d) {
    try {
      return new Date(d).toLocaleDateString("pt-BR", {
        day: "2-digit", month: "long", year: "numeric"
      });
    } catch (e) { return ""; }
  });

  // Filtro de data ISO (para SEO / dados estruturados)
  eleventyConfig.addFilter("dataISO", function (d) {
    try {
      return new Date(d).toISOString().slice(0, 10);
    } catch (e) { return ""; }
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
