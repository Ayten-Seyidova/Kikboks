$(() => {

  function AddZero(num) {
    return num >= 0 && num < 10 ? "0" + num : num + "";
  }

  function getTime() {
    var now = new Date();
    var strDateTime = [
      [AddZero(now.getHours()), AddZero(now.getMinutes())].join(":"),
    ];
    document.getElementById("time").innerHTML = strDateTime;
  }

  getTime();

  setInterval(() => {
    getTime();
  }, 1000);

  function fixMenu() {
    let imgHeight = $(".header-img").height() + $(".header-info").height();
    if ($(window).scrollTop() > imgHeight) {
      $(".menu-section").css({ position: "fixed", top: "0" });
      $(".navbar").css({ "background-color": "rgba(6, 59, 138, .7)" });
    } else {
      $(".menu-section").css({ position: "sticky", top: "0" });
      $(".navbar").css({ "background-color": "rgba(6, 59, 138, 1)" });
    }
  }

  fixMenu();

  $(window).scroll(function () {
    fixMenu();
  });

  $(window).resize(function () {
    fixMenu();
  });

  $(document).on("click", ".menu-btn", () => {
    $("#menuContainer").css({
      "margin-left": "0px",
      "margin-right": "0px",
      "min-width": "100vw",
      "max-width": "100vw",
    });
    $(".dropdown-menu").css({
      "border-top-right-radius": "8px",
      "border-top-left-radius": "8px",
    });
    $(".navbar-toggler").removeClass("menu-btn");
    $(".navbar-toggler").addClass("menu-open");
    $(".menu-section").css({ position: "sticky" });
    fixMenu();
  });

  $(document).on("click", ".menu-open", () => {
    $("#menuContainer").css({
      "margin-left": "auto",
      "margin-right": "auto",
      "min-width": "auto",
      "max-width": "auto",
    });
    $(".dropdown-menu").css({
      "border-top-right-radius": "0px",
      "border-top-left-radius": "0px",
    });
    $(".navbar-toggler").removeClass("menu-open");
    $(".navbar-toggler").addClass("menu-btn");
    $(".menu-section").css({ position: "static" });
    fixMenu();
  });

  new WOW().init();

  $('.owl-carousel1').owlCarousel({
      autoplay: true,
      autoplayTimeout: 5000,
      loop: false,
      margin: 60,
      nav: false,
      responsive: {
          576: {
              items: 2
          },
          768: {
              items: 3
          },
          992: {
              items: 4
          }
      }
  })
});
