// Прогрессбар для слайдера на баннере
$(document).ready(function () {
  var time = 9;
  var $sliderBanner,
    isPause,
    tick,
    percentTime = 0;

  $sliderBanner = $(".slider-banner");
  $sliderBanner.slick({
    //variableWidth: true,
    fade: true,
    cssEase: 'linear',
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

  var $sliderInfra = $(".slider-infra");

  $sliderInfra.slick({
    slideToShow: 2,
    slideToScroll: 2,
    speed: 400,
    variableWidth: true,
  });

  var $sliderProjects = $(".slider-projects");

  $sliderProjects.slick({
    slideToShow: 1,
    slideToScroll: 1,
    speed: 400,
    adaptiveHeight: true,
    variableWidth: true,
  });

  let $equipmentItem = $(".equipment-item"),
    $equipmentImage = $(".equipment-img"),
    $equipmentText = $(".equipment-item p");

  $equipmentItem.each(function (i) {
    $(this).hover(function () {
      $equipmentImage.eq(i).toggleClass("active");
      $equipmentText.eq(i).toggleClass("active");
    });
  });

  /* Прокрутка по якорям */
  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        {
          duration: 100,
          easing: "swing",
        }
      );
    e.preventDefault();
    return false;
  });


  let $headerBurger = $(".header-burger"),
      $headerMenu = $(".header-menu"),
      $pseudoCircle = $(".pseudo-circle"),
      $menuItem = $(".header-menu_list-item");

  $headerBurger.click(function() {
    $(this).toggleClass('active');
    $headerMenu.toggleClass('active');
    
    if ($pseudoCircle.hasClass('active')) {
      $pseudoCircle.addClass('inactive');
      $pseudoCircle.removeClass('active');
    } else {
      $pseudoCircle.addClass('active');
      $pseudoCircle.removeClass('inactive');
    }
  })

  $menuItem.click(function() {
    $headerBurger.toggleClass('active');
    $headerMenu.toggleClass('active');
    
    if ($pseudoCircle.hasClass('active')) {
      $pseudoCircle.addClass('inactive');
      $pseudoCircle.removeClass('active');
    } else {
      $pseudoCircle.addClass('active');
      $pseudoCircle.removeClass('inactive');
    }
  })
  
});