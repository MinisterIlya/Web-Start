$(document).ready(function () {
  $('.scroll-down__text').click(function() {
    $('html, body').animate({scrollTop: $('.header').height() + $('.hero').height() }, 600)
    return false
  })
  $('.logo__link').click(function () {
    $('html, body').animate({scrollTop: 0}, 600)
  })

  $('.nav').on('click', 'a', function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1000)
  })

  $(window).scroll(function() {
    if ($(window).width() > 960) {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').slideDown().fadeIn();
      } else {
        $('.scrollup').slideUp().fadeOut();
      }
    } else {
      $('.scrollup').css('display', 'none')
    }

  })
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
  $('.logo__link').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $('.top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
})