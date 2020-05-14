// document.addEventListener('DOMContentLoaded', function() {
//   const modal = document.querySelector('.modal'),
//         // modalContainer = documen.querySelector('.modal-conteiner'),
//         modalDialog = document.querySelector('.modal__dialog'),
//         modalBtn = document.querySelectorAll('[data-toggle=modal]'),
//         closeBtn = document.querySelector('.modal__close');

//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');    
//   };

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

//   document.addEventListener('keyup', function(key) {
//     if (key.keyCode === 27) modal.classList.remove('modal--visible');
//   })

//   modal.addEventListener('click', function(e) {
//     if (e.target == this) modal.classList.remove('modal--visible');
//   })

// });

$(document).ready(function () {
  let modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  $(document).on('keyup', function(key) {
    if (key.keyCode === 27) modal.removeClass('modal--visible');
  });
  $(modal).on('click', function(event) {
    if(event.target == this) modal.removeClass('modal--visible');
  });
});