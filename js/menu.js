const menu = (function () {
  const app = {};

  app.navToggleShow = function () {
    document.getElementById('menu').classList.toggle('menu_show');
    document.getElementById('menu-override').classList.toggle('menu__override_show');
  };

  app.navToggleHide = function () {
    document.getElementById('menu').classList.toggle('menu_hide');
  };

  app.menuUserToggle = function () {
    document
      .getElementById('menu-user-list')
      .classList.toggle('menu-user-list_show');
    document
      .getElementById('menu-user-override')
      .classList.toggle('menu-user__override_show');
  };

  app.submenuToggle = function (id) {
    const item = document.getElementById(id);
    const arrow = item.getElementsByClassName(
      'menu-list__options-arrow',
    );
    if (arrow && arrow[0]) {
      arrow[0].classList.toggle('fa-angle-down');
      arrow[0].classList.toggle('fa-angle-up');
    }
    const menu = item.getElementsByClassName('menu-list__sub');
    if (menu && menu[0]) {
      menu[0].classList.toggle('menu-list__sub_show');
    }
  };
  return app;
})();
