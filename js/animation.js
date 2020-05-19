$(document).ready(function() {
  controlTitle = $('.control__section-title'),
  typesTitle = $('.types__section-title'),
  designTitle = $('.design__section-title');

  $(window).scroll(function() {

    if ($(window).scrollTop() >= 670) {
      controlTitle.css('animation-name', 'showLeft');
      controlTitle.css('animation-duration', '2s');
    }
    if ($(window).scrollTop() >= 1780) {
      typesTitle.css('animation-name', 'showLeft');
      typesTitle.css('animation-duration', '2s');
    }
    if ($(window).scrollTop() >= 2580) {
      designTitle.css('animation-name', 'showLeft');
      designTitle.css('animation-duration', '2s');
    }
  });


});