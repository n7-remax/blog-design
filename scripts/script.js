$(document).ready(function () {
  $(".header-slick-slider").slick({
    infinite: false,
    slidesToShow: 1,
    prevArrow: $(".slick-prev-button"),
    nextArrow: $(".slick-next-button"),
    responsive: [
      {
        breakpoint: 1271,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

// Hamburger
$(".hamburger").on("click", function (e) {
  $(".hamburger").toggleClass("is-active");
  $(".nav-wrapper").toggleClass("nav-wrapper-mobile");
  $(".nav").toggleClass("nav-mobile");
  $(".nav-logo").toggleClass("display-none");
});
// Scroll to top
$('.footer-button-up').on("click", function (e) {
  $('body,html').animate({
      scrollTop: 0
  }, 1000);
  return false;
});
// toggle pricing color
$(".pricing-button").on("click", function (e) {
  if($(".pricing-button").hasClass("pricing-button-active") && $(".pricing-options-item-heading").hasClass("pricing-options-item-heading-active")) {
    $(".pricing-button").removeClass("pricing-button-active")
    $(".pricing-options-item-heading").removeClass("pricing-options-item-heading-active")
  }
  if($(".pricing-options-item-price-circle-h4").hasClass("pricing-options-item-price-circle-h4-active")) {
    $(".pricing-options-item-price-circle-h4").removeClass("pricing-options-item-price-circle-h4-active")
  }
  $(this).toggleClass("pricing-button-active");
  $(this).closest(".pricing-options-item").children('.pricing-options-item-heading').toggleClass("pricing-options-item-heading-active")
  $(this).closest(".pricing-options-item").find(".pricing-options-item-price-circle-h4").toggleClass("pricing-options-item-price-circle-h4-active")
 
});