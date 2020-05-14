$(document).ready(function () {
  $('.hero__scroll-down').click(function() {
    $('html, body').animate({scrollTop: $('.header').height() + $('.hero').height() - 24}, 600)
    return false
  })
  $('.logo__link').click(function () {
    $('html, body').animate({scrollTop: 0}, 600)
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  })
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
})