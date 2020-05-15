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

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySecondSwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-digit',
      type: 'fraction',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let next = $('.swiper-button-next'),
      prev = $('.swiper-button-prev'),
      bullets = $('.swiper-pagination'),
      nextSecond = $('.swiper-button-next--second'),
      bulletsSecond = $('.swiper-pagination--second');

  next.css('left', prev.width() + bullets.width() + 20);
  bullets.css('left', prev.width() + 10);

  nextSecond.css('left', prev.width() + bulletsSecond.width() + 20);
  bulletsSecond.css('left', prev.width() + 10);
  
});