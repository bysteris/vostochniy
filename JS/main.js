// Прогрессбар для слайдера на баннере
$(document).ready(function () {
  var time = 5;
  var $sliderBanner,
    isPause,
    tick,
    percentTime = 0;

  $sliderBanner = $(".slider-banner");
  $sliderBanner.slick({
    //variableWidth: true,
    speed: 1000,
    draggable: true,
    adaptiveHeight: true,
    dots: false,
    mobileFirst: true,
    pauseOnDotsHover: true,
  });
  $sliderBanner.on({
    mouseenter: function () {
      isPause = false;
    },
    mouseleave: function () {
      isPause = false;
      startProgressbar();
    },
    mousedown: function () {
      $rbar.fadeOut("slow");
      percentTime = 0;
    },
    afterChange: function (event, slick, currentSlide, nextSlide) {
      $(".circle-tx").text(
        (currentSlide ? currentSlide : 0) + 1 + "/" + slick.slideCount
      );
    },
  });

  function startProgressbar() {
    clearTimeout(tick);
    isPause = false;
    tick = setInterval(interval, 10);
    $rbar.fadeIn("slow");
  }
  var $rbar = $(".circle-go");
  var rlen = 2 * Math.PI * $rbar.attr("r");

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $rbar.css({
        strokeDasharray: rlen,
        strokeDashoffset: rlen * (1 - percentTime / 100),
      });
      if (percentTime >= 100) {
        $sliderBanner.slick("slickNext");
        percentTime = 0;
        startProgressbar();
      }
    }
  }
  startProgressbar();




  // Прогрессбар при прокрутке страницы
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
});




var $sliderInfra = $('.slider-infra');

$sliderInfra.slick({
  slideToShow: 2,
  slideToScroll: 2,
  speed: 400,
  variableWidth: true,
});