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
  var mySecondSwiper = new Swiper ('.swiper-container__steps', {
    loop: true,
    pagination: {
      el: '.swiper-pagination__steps',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next--second',
      prevEl: '.swiper-button-prev--second',
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
      slides = $('.swiper-slide-item'),
      prevSecond = $('.swiper-button-prev--second'),
      dots = $('.swiper-pagination-bullet'),
      listItem = $('.list__item');

  prevSecond.on('click', () => {
    $('.list__item--active').toggleClass('list__item--active');
    plusSlides(-1);
  });
  nextSecond.on('click', () => {
    $('.list__item--active').toggleClass('list__item--active');
    plusSlides(1);
  });
  bulletsSecond.on('click', (event) => {
    for (let i = 6; i < dots.length; i++) {
      if (event.target == dots[i] && $(event.target).hasClass('swiper-pagination-bullet')) {
        $('.list__item--active').toggleClass('list__item--active');
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

  listItem.on('click', function () {
    
    var index = $(this).attr('data-index');

    $('.list__item--active').toggleClass('list__item--active');
    $(this).toggleClass('list__item--active');
    swipeSlide(index);
  });

  function swipeSlide(n) {
    $('.steps .swiper-pagination-bullets span').each(function(index){
        if(index == n-1){
          $(this).click()
        }
      })
    }

  new WOW().init();

  // Валидация формы

  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      modalUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      modalUserPhone: {
        required: true,
        minlength: 17,
      },
      modalUserEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      modalUserName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 букв",
        maxlength: "Имя не должно быть длинее 15 букв"
      }, 
      modalUserPhone: "Заполните поле",
      modalUserEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      footerUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      footerUserPhone: {
        required: true,
        minlength: 17,
      },
      footerQuestion: {
        required: true,
      }
    },
    messages: {
      footerUserName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 букв",
        maxlength: "Имя не должно быть длинее 15 букв"
      }, 
      footerUserPhone: "Заполните поле",
      footerQuestion: {
        required: "Укажите интересующий вас вопрос",
      }
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      controlUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      controlUserPhone: {
        required: true,
        minlength: 17,
      },
    },
    messages: {
      controlUserName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 букв",
        maxlength: "Имя не должно быть длинее 15 букв"
      }, 
      controlUserPhone: "Заполните поле",
    }
  });

  // Маска для номера телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (__) ___-__-__"});


});