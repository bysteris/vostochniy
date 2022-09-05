$(document).ready(function () {
  //Прелоадер
  $(".preloader")
    .delay(3100)
    .queue(function (next) {
      $(this).css({
        top: "-1000%"
      });
      $("body").removeClass("active");
      next();
    });

  // Прогрессбар для слайдера на баннере
  let time = 9;
  let $sliderBanner,
    isPause,
    tick,
    percentTime = 0;

  $sliderBanner = $(".slider-banner");

  $sliderBanner.slick({
    fade: true,
    cssEase: "linear",
    speed: 1000,
    draggable: true,
    adaptiveHeight: true,
    arrows: false,
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
  let $rbar = $(".circle-go");
  let rlen = 2 * Math.PI * $rbar.attr("r");

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
    progressbarPage();
  };

  function progressbarPage() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  // Слайдер блок Инфрастуктура
  let $sliderInfra = $(".slider-infra");
  $sliderInfra.slick({
    slideToShow: 2,
    slideToScroll: 1,
    speed: 400,
    arrows: false,
    dots: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          mobileFirst: true,
          //variableWidth: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slideToShow: 1,
          variableWidth: false,
          arrows: true,
        }
      }
    ]
  });

  // Слайдер блок Проекты домов
  let $sliderProjects = $(".slider-projects");
  $sliderProjects.slick({
    slideToShow: 1,
    slideToScroll: 1,
    speed: 400,
    dots: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        mobileFirst: true,
        variableWidth: false,
      }
    }]
  });

  $("a[data-slide]").click(function (e) {
    e.preventDefault();
    let slideno = $(this).data("slide");
    $sliderProjects.slick("slickGoTo", slideno - 1);
  });

  // Смена изображений по наведению блок equipment
  let $equipmentItem = $(".equipment-item"),
    $equipmentImage = $(".equipment-img"),
    $equipmentText = $(".equipment-item p");

  $equipmentItem.each(function (i) {
    $(this).hover(function () {
      $equipmentImage.eq(i).toggleClass("active");
      $equipmentText.eq(i).toggleClass("active");
    });
  });

  // Плавная прокрутка по якорям
  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);

    if ($(".header-menu").hasClass("active")) {
      $("html, body")
        .stop()
        .animate({
          scrollTop: $(anchor.attr("href")).offset().top,
        }, {
          duration: 900,
          easing: "swing",
        });
    } else {
      $("html, body")
        .stop()
        .animate({
          scrollTop: $(anchor.attr("href")).offset().top,
        }, {
          duration: 100,
          easing: "swing",
        });
    }
    e.preventDefault();
    return false;
  });

  let $headerBurger = $(".header-burger"),
    $headerMenu = $(".header-menu"),
    $pseudoCircle = $(".pseudo-circle"),
    $menuItem = $(".header-menu_list-item"),
    $headerImg = $(".header-menu_img"),
    $logowhite = $(".logo-white"),
    $logoColor = $(".logo-color"),
    $headerColLeft = $(".header-col_left"),
    $headerColRight = $(".header-col_right"),
    $headerCallBtn = $(".header-call_btn");

  // Клик по меню
  $headerBurger.click(function () {
    $(this).toggleClass("active");
    $headerMenu.toggleClass("active");
    $headerImg.toggleClass("active");
    $menuItem.toggleClass("active");

    if ($pseudoCircle.hasClass("active")) {
      $pseudoCircle.addClass("inactive");
      $pseudoCircle.removeClass("active");
    } else {
      $pseudoCircle.addClass("active");
      $pseudoCircle.removeClass("inactive");
    }

    if ($headerMenu.hasClass("active")) {
      $header.removeClass("active");
      $headerColLeft.removeClass("active");
      $headerColRight.removeClass("active");
      $headerCallBtn.removeClass("active");
      $logoColor.removeClass("active");
      $logoColor.addClass("inactive");
      $logowhite.removeClass("inactive");
      $logowhite.addClass("active");
    } else if ($(window).scrollTop() > 1) {
      $header.addClass("active");
      $headerColLeft.addClass("active");
      $headerColRight.addClass("active");
      $headerCallBtn.addClass("active");
      $logoColor.addClass("active");
      $logoColor.removeClass("inactive");
      $logowhite.addClass("inactive");
      $logowhite.removeClass("active");
    }
  });

  // Клик по пунку меню
  $menuItem.click(function () {
    $menuItem.toggleClass("active");
    $headerBurger.toggleClass("active");
    $headerMenu.toggleClass("active");

    if ($pseudoCircle.hasClass("active")) {
      $pseudoCircle.addClass("inactive");
      $pseudoCircle.removeClass("active");
    } else {
      $pseudoCircle.addClass("active");
      $pseudoCircle.removeClass("inactive");
    }
  });

  // Клик по якорю Контакты, когда открыто меню
  $(".header-col_right a").click(function () {
    $(".header-burger").removeClass("active");
    $(".pseudo-circle").removeClass("active");
    $(".header-menu").removeClass("active");
    $(".header-menu_list-item").removeClass("active");
    $(".header-menu_img").removeClass("active");
  });

  // Меню прячется по скроллу вниз
  const $header = $(".header");
  let prevScroll,
    lastShowPos,
    scrollChange = 1;

  $(window).on("scroll", function () {
    const scroll = $(window).scrollTop();

    if (scroll > scrollChange && scroll > prevScroll) {
      $header.addClass("scroll");
      lastShowPos = scroll;
    } else if (scroll <= Math.max(lastShowPos - 250, 0)) {
      $header.removeClass("scroll");
    }
    prevScroll = scroll;

    if (scroll > scrollChange) {
      $header.addClass("active");
      $headerColLeft.addClass("active");
      $headerColRight.addClass("active");
      $headerCallBtn.addClass("active");
      $logowhite.addClass("inactive");
      $logoColor.removeClass("inactive");
      $logoColor.addClass("active");
    } else {
      $header.removeClass("active");
      $headerColLeft.removeClass("active");
      $headerColRight.removeClass("active");
      $headerCallBtn.removeClass("active");
      $logowhite.removeClass("inactive");
      $logoColor.removeClass("active");
      $logoColor.addClass("inactive");
    }
  });

  // Переключение кнопок в блоке Проекты домов
  let $projectsItem = $(".projects-item");
  $projectsItem.click(function () {
    $projectsItem.removeClass("active");
    $(this).addClass("active");
  });

  // Поворот плюсиков в блоке "Как мы строим"
  let $circle = $(".circle"),
    $text = $(".text");

  $circle.each(function (i) {
    $(this).hover(function () {
      $circle.eq(i).toggleClass("active");
      $text.eq(i).toggleClass("active");
    });
  });

  // Валидация формы
  $("input[name=tel]").mask("+7 (999) 999-99-99");

  //Открытие и закрытие модалки
  let $callBtn = $(".header-call_btn"),
    $modal = $(".modal"),
    $modalClose = $("#modalClose"),
    $modalWrapper = $(".modal-wrapper");

  $callBtn.click(function () {
    $modal.addClass("active");
  });

  $modalClose.click(function () {
    $modal.removeClass("active");
  });


});