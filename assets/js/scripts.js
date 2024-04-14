"use strict";

// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function () {
  var mobileMenu = function mobileMenu() {
    var body = document.querySelector('body');
    var mainMenu = document.querySelector('.header__menu');
    var header = document.querySelector('.header');
    var burger = document.querySelector('.burger');
    var links = mainMenu.querySelectorAll('.top-menu__link');
    burger.addEventListener('click', function () {
      header.classList.toggle('is-active');
      burger.classList.toggle('is-active');
      mainMenu.classList.toggle('is-active');
      body.classList.toggle('faded');
    });
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (header.classList.contains('is-active')) {
          header.classList.remove('is-active');
          burger.classList.remove('is-active');
          mainMenu.classList.remove('is-active');
          body.classList.remove('faded');
        }
      });
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
  var swiper = new Swiper('.sliderPartners .swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    pagination: {
      el: '.sliderPartners .swiper-pagination',
      clickable: true
    }
  });
  var smoothScroll = function smoothScroll(element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      var anchor = element.getAttribute('href');
      var targetElement = document.querySelector(anchor);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };
  var smoothScrollList = Array.from(document.querySelectorAll(".smooth-scroll"));
  smoothScrollList.forEach(smoothScroll);
  function phoneMask(elements) {
    if (elements.length !== 0) {
      var maskOptions = {
        mask: '+{7} (000) 000-00-00'
      };
      elements.forEach(function (element) {
        var mask = IMask(element, maskOptions);
      });
    }
  }
  var inputPhoneList = Array.from(document.querySelectorAll('input[type="tel"]'));
  phoneMask(inputPhoneList);
  var inputs = document.querySelectorAll('.input');
  if (inputs.length > 0) {
    inputs.forEach(function (input) {
      var inputNative = input.querySelector('.input__native');
      inputNative.addEventListener('input', function () {
        if (this.value) {
          input.classList.add('is-value');
        } else if (input.classList.contains('is-value')) {
          input.classList.remove('is-value');
        }
      });
    });
  }
});