$(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $("#nav").css("background", "rgba(7, 10, 47, .97)");
      }
      else {
        $("#nav").css("background", "rgba(7, 10, 47, 0)");
      }
    })
  });
  