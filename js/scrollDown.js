$(document).ready(function () {
  $('.hero__scroll-down').click(function() {
    $('html, body').animate({scrollTop: $('.header').height() + $('.hero').height() - 24}, 600)
    return false
  })
})