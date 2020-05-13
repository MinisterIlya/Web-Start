document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal'),
        modalBtn = document.querySelectorAll('[data-toggle=modal]'),
        closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');    
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);

});