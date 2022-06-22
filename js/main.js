(function () {
   const burger = document.querySelector('.burger');
   const menuItem = document.querySelector('.header__list');
   const body = document.querySelector('body');
   burger.addEventListener('click', () => {
      burger.classList.toggle('burger__active');
      menuItem.classList.toggle('header__list--active');
      body.classList.toggle('scroll-lock');
   });
}());