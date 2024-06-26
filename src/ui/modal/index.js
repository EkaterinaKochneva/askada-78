/* Использование:
  К ссылке или кнопке добавить атрибут data-modal="modal-1", где modal-1 соответствует id  нужного модального окна

*/

MicroModal.init({
  onShow: function(modal, element, event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('body').classList.add('hidden');
  },
  onClose: function() {
    document.querySelector('body').classList.remove('hidden');
  },
  openTrigger: 'data-modal',
  closeTrigger: 'data-modal-close',
  awaitCloseAnimation: true,
  disableFocus: true
});