// Mobile Menu Display
$(function () {
  $("#hamburgerIcon").click(function () {
    // remove classes from all
    $("#mobileMenu").addClass("showMenu");
  });
  $("#closeIcon").click(function () {
    // remove classes from all
    $("#mobileMenu").removeClass("showMenu");
  });
});

// MOVING AROUND ACTIVE LINK IN SLIDER GALLERY
$(function () {
  $("li").click(function () {
    // remove classes from all
    $("li").removeClass("activeLink");
    // add class to the one we clicked
    $(this).addClass("activeLink");
  });
});

// BEFORE AND AFTER CARFAX SECTION
$(document).ready(function(){
  $('#next').on('click', function(){
      let currentSlide = $('.active');
      let nextSlide = currentSlide.next();

      if(nextSlide.length) {
          currentSlide.removeClass('active').css('z-index', -10);
          nextSlide.addClass('active').css('z-index', 10);
      }
  });

  $('#prev').on('click', function(){
      let currentSlide = $('.active');
      let prevSlide = currentSlide.prev();

      if(prevSlide.length) {
          currentSlide.removeClass('active').css('z-index', -10);
          prevSlide.addClass('active').css('z-index', 10);
      }
  });
});