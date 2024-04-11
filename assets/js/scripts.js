"use strict";

// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function () {
  var mobileMenu = function mobileMenu() {
    var body = document.querySelector('body');
    var mainMenu = document.querySelector('.header__menu');
    var header = document.querySelector('.header');
    var burger = document.querySelector('.burger');
    burger.addEventListener('click', function () {
      header.classList.toggle('is-active');
      burger.classList.toggle('is-active');
      mainMenu.classList.toggle('is-active');
      body.classList.toggle('faded');
    });
    var activateScrollHeader = function activateScrollHeader() {
      var scrollVal = 100;
      var classBg = 'is-bg';
      var scrollOffset = window.scrollY;
      if (scrollOffset > scrollVal && !header.classList.contains(classBg)) {
        header.classList.add(classBg);
      } else if (scrollOffset <= scrollVal && header.classList.contains(classBg)) {
        header.classList.remove(classBg);
      }
    };
    window.addEventListener('scroll', activateScrollHeader);
  };
  mobileMenu();
  /* Использование:
    К ссылке или кнопке добавить атрибут data-modal="modal-1", где modal-1 соответствует id  нужного модального окна
  
  */

  MicroModal.init({
    onShow: function onShow(modal, element, event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('body').classList.add('faded');
    },
    onClose: function onClose() {
      document.querySelector('body').classList.remove('faded');
    },
    openTrigger: 'data-modal',
    closeTrigger: 'data-modal-close',
    awaitCloseAnimation: true,
    disableFocus: true
  });
});