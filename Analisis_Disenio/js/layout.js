// js/layout.js

function loadPartial(containerId, file) {
  const el = document.getElementById(containerId);
  if (!el) return;

  fetch(file)
    .then(res => res.text())
    .then(html => {
      el.innerHTML = html;

      if (file.includes('header.html')) {
        marcarMenuActivo();
        if (window.initHeaderScripts) {
          window.initHeaderScripts();
        }
      }
    })
    .catch(err => console.error('Error cargando', file, err));
}

function marcarMenuActivo() {
  let path = window.location.pathname.toLowerCase();
  let page = path.split('/').pop();

  if (page === '' || page === 'index.htm' || page === 'index.html') {
    page = 'index.html';
  }

  const links = document.querySelectorAll('.hm-menu ul li a');

  links.forEach(a => {
    const href = a.getAttribute('href').toLowerCase();
    if (href === page) {
      const li = a.parentElement;
      li.classList.add('actual');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('site-header', 'partials/header.html');
  loadPartial('site-footer', 'partials/footer.html');
});
