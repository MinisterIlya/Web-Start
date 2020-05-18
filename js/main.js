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

  let next = $('.swiper-button-next'),
      prev = $('.swiper-button-prev'),
      bullets = $('.swiper-pagination'),
      nextSecond = $('.swiper-button-next--second'),
      bulletsSecond = $('.swiper-pagination--second');

  next.css('left', prev.width() + bullets.width() + 20);
  bullets.css('left', prev.width() + 10);

  nextSecond.css('left', prev.width() + bulletsSecond.width() + 20);
  bulletsSecond.css('left', prev.width() + 10);
  

  let slideIndex = 1,
      cardIndex = 1,
      slides = $('.swiper-slide-item'),
      prevSecond = $('.swiper-button-prev--second'),
      dots = $('.swiper-pagination-bullet'),
      listItem = $('.list__item'),
      listNumber = $('.list__number'),
      listDescription = $('.list__description'),
      listWord = $('.list__word');

  prevSecond.on('click', () => {
    $('.list__item--active').toggleClass('list__item--active');
    plusSlides(-1);
  });
  nextSecond.on('click', () => {
    $('.list__item--active').toggleClass('list__item--active');
    plusSlides(1);
  });
  bulletsSecond.on('click', (event) => {
    $('.list__item--active').toggleClass('list__item--active');
    for (let i = 6; i < dots.length; i++) {
      if (event.target == dots[i] && $(event.target).hasClass('swiper-pagination-bullet')) {
        currentSlide(i - 5);
      }
    }
  })  
  function currentSlide(n) {
    showCard(slideIndex = n);
  }

  function showCard(n) {
    if (n < 1) {
      slideIndex = 6;
    } else if (n > 6) {
      slideIndex = 1;
    }
    $(`[data-index=${slideIndex}]`).toggleClass('list__item--active');
  };
  function plusSlides(n) {
    showCard(slideIndex += n);
  };



  function showSlide(n) {

  }

  console.log(listItem[0])

  listItem.on('click', function (event) {
    event.preventDefault();
    $('.list__item--active').toggleClass('list__item--active');
    $(this).toggleClass('list__item--active');
    for (let j = 0; j < listItem.length; j++) {
      if (event.target == listItem[j] || event.target == listNumber[j] || event.target == listDescription[j] 
        || event.target == listWord[j]) {
        cardIndex = j;
      }
    }
  });
  
  //! swiper-slide-active

  new WOW().init();
});