//= jquery.min.js
//= slick.min.js
//= PageScroll2id.min.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

$(window).scroll(function () {
  if ($(window).scrollTop() >= 90) {
    $(".top-line").addClass("fixed");
  } else {
    $(".top-line").removeClass("fixed");
  }
});

$(".link-bottom").mPageScroll2id({
  offset: 60,
  scrollSpeed: 900,
  scrollingEasing: "easeInOutQuint",
});

function heightFooter() {
  var heightFoot = $(".footer").outerHeight();
  $("body").css({ "padding-bottom": heightFoot });
}
heightFooter();
$(window).resize(function () {
  heightFooter();
});

// $(".burger-menu").on("click", function() {
//   $(".menu-header").toggleClass('is-active');
//   $("body").toggleClass('overflow');
// })

$(".slider-comment").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  speed: 400,
  dots: true,
  arrows: false,
  // adaptiveHeight: true,
  fade: true,
  cssEase: "ease-out",
  // appendArrows: ".slider-arrows--header",
  // prevArrow:
  //   '<div class="top-sliser--prev"><img src="img/icon/arrow-slider.svg" /></div>',
  // nextArrow:
  //   '<div class="top-sliser--next"><img src="img/icon/arrow-slider.svg" /></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        fade: false,
      },
    },
  ],
});

var menuOpen = function () {
  $(".burger-menu").click(function (e) {
    e.preventDefault();
    $(".menu-main").toggleClass("is-active");
    $("#overlayer").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
  });
  $(document).mouseup(function (e) {
    var container = $(".menu-item");
    if (container.has(e.target).length === 0) {
      $(".menu-main").removeClass("is-active");
      $("#overlayer").removeClass("is-active");
      $(".burger-menu").removeClass("is-active");
    }
  });
};
menuOpen();

$(window).on("resize scroll", function () {
  $(".menu-main").removeClass("is-active");
  $("#overlayer").removeClass("is-active");
  $(".burger-menu").removeClass("is-active");
});
