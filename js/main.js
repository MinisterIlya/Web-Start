$(document).ready(function () {
  let modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      thanksModal = $('.thanks-modal');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
    ym('64339864', 'reachGoal', 'button'); 
    return true;      
  });
  closeBtn.on('click', function() {
    modal.removeClass('modal--visible');
    thanksModal.removeClass('thanks-modal--visible');
  });
  $(document).on('keyup', function(key) {
    if (key.keyCode === 27) {
      modal.removeClass('modal--visible')
      thanksModal.removeClass('thanks-modal--visible')
    };
  });
  $(modal).on('click', function(event) {
    if(event.target == this) modal.removeClass('modal--visible');
  });
  $(thanksModal).on('click', function(event) {
    if(event.target == this) thanksModal.removeClass('thanks-modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container__projects', {
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
      el: '.swiper-pagination--second',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next--second',
      prevEl: '.swiper-button-prev--second',
    },
  });

  
  var myThirdSwiper = new Swiper ('.swiper-container__pro', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next__pro',
      prevEl: '.swiper-button-prev__pro',
    },
  });

  // if ($(window).width() > 760) {
  //   $('.swiper-container__pro').css('display', 'none')
  // }
  // $(window).on('resize', function() {
  //   if ($(window).width() > 760) {
  //     $('.swiper-container__pro').css('display', 'none')
  //   } else if ($(window).width() <= 760) {
  //     $('.swiper-container__pro').css('display', 'flex')
  //   }
  // })


  let next = $('.swiper-button-next'),
      prev = $('.swiper-button-prev'),
      bullets = $('.swiper-pagination'),
      nextSecond = $('.swiper-button-next--second'),
      bulletsSecond = $('.swiper-pagination--second');

  next.css('left', prev.width() + bullets.width() + 20);
  bullets.css('left', prev.width() + 15);

  nextSecond.css('left', prev.width() + bulletsSecond.width() + 20);
  bulletsSecond.css('left', prev.width() + 15);
  

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
        if(index == n - 1){
          $(this).click()
        }
      })
    }

  new WOW().init();

  // Валидация формы
  $("#policyCheckbox-error").addClass("invalid__checkbox");

  $('.modal__form').validate({
    errorClass: "invalid",
    validClass: "success",
    errorElement: "div",  
    highlight: function(element) {
      $(element).addClass("invalid__input");
      if ("checkbox" == $(element).attr("type")) {
        $("#modal__policy-label").addClass("invalid__checkbox");
      }
    },
    unhighlight: function(element) {
      $(element).removeClass("invalid__input");
      if ("checkbox" == $(element).attr("type")) {
        $("#modal__policy-label").removeClass("invalid__checkbox");
      }
    },
    errorPlacement: function(even, types) {
      if ("checkbox" == types.attr("type")) {
        types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      policyCheckbox: {
        required: true,
      },
      modalUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      modalUserPhone: {
        required: true,
        minlength: 16,
      },
      modalUserEmail: {
        required: true,
        email: true,
      }
    },
    messages: {
      policyCheckbox: "",
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $("form")[3].reset();
          modal.removeClass('modal--visible');
          thanksModal.addClass('thanks-modal--visible');       
          ym('64339864', 'reachGoal', 'form'); 
          return true;      
        }
      });
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    validClass: "success",
    errorElement: "div",  
    highlight: function(element) {
      $(element).addClass("invalid__input");
      if ("checkbox" == $(element).attr("type")) {
        $("#footer__policy-label").addClass("invalid__checkbox");
      }
    },
    unhighlight: function(element) {
      $(element).removeClass("invalid__input");
      if ("checkbox" == $(element).attr("type")) {
        $("#footer__policy-label").removeClass("invalid__checkbox");
      }
    },
    errorPlacement: function(even, types) {
      if ("checkbox" == types.attr("type")) {
        types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      footerPolicyCheckbox: {
        required: true,
      },
      footerUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      footerUserPhone: {
        required: true,
        minlength: 16,
      },
      footerQuestion: {
        required: true,
      }
    },
    messages: {
      footerPolicyCheckbox: "",
      footerUserName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 букв",
        maxlength: "Имя не должно быть длинее 15 букв"
      }, 
      footerUserPhone: "Заполните поле",
      footerQuestion: {
        required: "Укажите интересующий вас вопрос",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "footer.php",
        data: $(form).serialize(),
        success: function (response) {
          $("form")[2].reset();
          thanksModal.addClass('thanks-modal--visible');       
          ym('64339864', 'reachGoal', 'form'); 
          return true;      
        }
      });
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    highlight: function(element) {
      $(element).addClass("invalid__input");
      if ($(element).attr("type") == "checkbox") {
        $("#control__policy-label").addClass("invalid__checkbox");
      }
    },
    unhighlight: function(element) {
      $(element).removeClass("invalid__input");
      if ($(element).attr("type") == "checkbox") {
        $("#control__policy-label").removeClass("invalid__checkbox");
      }
    },
    errorPlacement: function(even, types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      controlPolicyCheckbox: {
        required: true
      },
      controlUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      controlUserPhone: {
        required: true,
        minlength: 16,
      },
    },
    messages: {
      controlPolicyCheckbox: {
        required: ""
      },
      controlUserName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 букв",
        maxlength: "Имя не должно быть длинее 15 букв"
      }, 
      controlUserPhone: "Заполните поле",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "control.php",
        data: $(form).serialize(),
        success: function (response) {
          $("form")[0].reset();
          thanksModal.addClass('thanks-modal--visible');
          ym('64339864', 'reachGoal', 'form'); 
          return true;      
        }
      });
    }
  });
  $('.pro__form').validate({
    errorClass: "invalid",
    validClass: "success",
    errorElement: "div",  
    highlight: function(element) {
      $(element).addClass("invalid__input");
      if ("checkbox" == $(element).attr("type")) {
        $("#pro__policy-label").addClass("invalid__checkbox");
      }
    },
    unhighlight: function(element) {
      $(element).removeClass("invalid__input");
      if ("checkbox" == $(element).attr("type")) {
        $("#pro__policy-label").removeClass("invalid__checkbox");
      }
    },
    errorPlacement: function(even, types) {
      if ("checkbox" == types.attr("type")) {
        types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      proPolicyCheckbox: {
        required: true,
      },
      proUserName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      proUserPhone: {
        required: true,
        minlength: 16,
      },
      proUserEmail: {
        required: true,
        email: true,
      }
    },
    messages: {
      proPolicyCheckbox: "",
      proUserName: {
        required: "Заполните поле",
        minlength: "Имя не должно быть короче 2 букв",
        maxlength: "Имя не должно быть длинее 15 букв"
      }, 
      proUserPhone: "Заполните поле",
      proUserEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "pro.php",
        data: $(form).serialize(),
        success: function (response) {
          $("form")[3].reset();
          thanksModal.addClass('thanks-modal--visible');       
          ym('64339864', 'reachGoal', 'form'); 
          return true;      
        }
      });
    }
  });
  // Маска для номера телефона

  $('[type=tel]').mask('+7(000) 00-00-00', {placeholder: "Ваш номер телефона:"});

  // Создаем карту

  //Ymap start
  var spinner = $('.ymap-container').children('.loader');
  var check_if_load = 0;
  var myMapTemp, myPlacemarkTemp;


  function init () {
    var myMapTemp = new ymaps.Map("map", {
      center: [55.781986, 49.124811],
      zoom: 15,
      controls: ['zoomControl', 'fullscreenControl']
    });
    myMapTemp.behaviors.disable('scrollZoom');
    var myPlacemarkTemp = new ymaps.Placemark([55.781986, 49.124811], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    
    myMapTemp.geoObjects.add(myPlacemarkTemp);

    //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
    waitForTilesLoad(layer).then(function() {
      //Скрываем
      spinner.removeClass('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback){

    var script = document.createElement("script");

    if (script.readyState){  //IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  //Другие браузеры
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (check_if_load == 0) {
          check_if_load = 1;

          spinner.addClass('is-active');

          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
            ymaps.load(init);
          });         
        
        }
      }
    );  
  }

  $(function() {
    //Map Yandex
    ymap();
  });

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '460',
      width: '100%',
      videoId: 'MZqtJ1IrRNI',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo()
  }

  let content = $('.content'),
      stylesItem = $('.styles__item');

  $(content).each(function (index) {
    if (index != 0) {
      $(this).hide();
    }
  })
  for(let i = 0; i < stylesItem.length; i++) {
  
  }
  $(stylesItem).on('click', function (event) {
    
    let index = $(stylesItem).index(event.target);

    $('.styles__item--active').toggleClass('styles__item--active');
    $(this).toggleClass('styles__item--active');

    $(content).each(function (ind) {
      $(this).fadeOut(500).delay(490);
      if (ind == index) {
        $(this).fadeIn(500)
      }
    })
  });
  if ($(window).width() <= 760) {
    $('.control__input').removeClass('.input--dark');
  }
  $(window).on('resize', function() {
    if ($(window).width() <= 760) {
      $('.control__input').toggleClass('.input--dark');
      $('.control__input').toggleClass('.input--light');
    }
  })
});