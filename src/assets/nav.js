// Menu mobile + ano do rodapé
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // ---- Redes sociais ----
  var WHATS = 'https://wa.me/5551998281716?text=' +
    encodeURIComponent('Olá, Carla! Vim pelo site e gostaria de agendar um atendimento.');
  var INSTA = 'https://instagram.com/carlagabriellethomas';
  var MAIL = 'mailto:carlathomaspsicologa@gmail.com';

  var SVG_WA = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.01 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.6-1.73a12.76 12.76 0 0 0 6.21 1.58h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.6zm0 23.43h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.6 10.6 0 0 1-1.62-5.64c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.63-10.62 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z"/></svg>';
  var SVG_IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.95c-3.15 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07zm0 3.32a4.53 4.53 0 1 1 0 9.06 4.53 4.53 0 0 1 0-9.06zm0 7.47a2.94 2.94 0 1 0 0-5.88 2.94 2.94 0 0 0 0 5.88zm5.77-7.69a1.06 1.06 0 1 1-2.12 0 1.06 1.06 0 0 1 2.12 0z"/></svg>';
  var SVG_MAIL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.01L4.4 7h15.2L12 12.01zM4 8.24V17h16V8.24l-7.4 4.93a1 1 0 0 1-1.2 0L4 8.24z"/></svg>';

  // Botão flutuante de WhatsApp (todas as páginas)
  var fab = document.createElement('a');
  fab.href = WHATS; fab.target = '_blank'; fab.rel = 'noopener';
  fab.className = 'whatsapp-fab';
  fab.setAttribute('aria-label', 'Falar no WhatsApp');
  fab.innerHTML = SVG_WA;
  document.body.appendChild(fab);

  // Ícones de redes sociais no rodapé (coluna Contato)
  var footCols = document.querySelectorAll('.site-footer .footer-grid > div');
  var footCol = footCols.length ? footCols[footCols.length - 1] : null;
  if (footCol) {
    var social = document.createElement('div');
    social.className = 'social-icons';
    social.innerHTML =
      '<a href="' + INSTA + '" target="_blank" rel="noopener" aria-label="Instagram">' + SVG_IG + '</a>' +
      '<a href="' + WHATS + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + SVG_WA + '</a>' +
      '<a href="' + MAIL + '" aria-label="E-mail">' + SVG_MAIL + '</a>';
    footCol.appendChild(social);
  }
});
