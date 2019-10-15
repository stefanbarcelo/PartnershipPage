document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("faq-accordion");
  var panel = document.getElementsByClassName('faq-panel');


  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains('active');
      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      } else {
        this.classList.remove("active");
        this.nextElementSibling.classList.remove("show");
      }
    }
  }
  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});