/*=========================================
    TABS (si algún día los usas)
==========================================*/
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.hm-tabs')) {

    const tabLinks = document.querySelectorAll('.hm-tab-link');
    const tabsContent = document.querySelectorAll('.tabs-content');

    if (tabLinks.length > 0) {
      tabLinks[0].classList.add('active');
    }
    if (tabsContent.length > 0) {
      tabsContent[0].classList.add('tab-active');
    }

    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].addEventListener('click', () => {

        tabLinks.forEach(tab => tab.classList.remove('active'));
        tabLinks[i].classList.add('active');

        tabsContent.forEach(tabCont => tabCont.classList.remove('tab-active'));
        if (tabsContent[i]) {
          tabsContent[i].classList.add('tab-active');
        }
      });
    }
  }
});

/*=========================================
    HEADER + MENÚ (se llama desde layout.js)
==========================================*/
window.initHeaderScripts = function () {
  const headerMenu = document.querySelector('.hm-header');
  if (headerMenu) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        headerMenu.classList.add('header-fixed');
      } else {
        headerMenu.classList.remove('header-fixed');
      }
    });
  }

  const menu = document.querySelector('.icon-menu');
  const menuClose = document.querySelector('.cerrar-menu');
  const menuMovil = document.querySelector('.header-menu-movil');

  if (menu && menuClose && menuMovil) {
    menu.addEventListener('click', () => {
      menuMovil.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
      menuMovil.classList.remove('active');
    });
  }
};
