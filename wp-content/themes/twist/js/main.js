$(document).ready(function () {
  if ($('.main-page')) {

    $(".natural__list").owlCarousel({
      responsive:{
        0: {
          items:1,
          margin:10,
          loop: true,
          dots: false
        },
        768: {
          items: 3,
          mouseDrag: false,
          touchDrag: false
        }
      }
    });

    $(".sertif__slider").owlCarousel({
      items: 2,
      margin: 37,
      loop: true,
      dots: true
    });

  }
});