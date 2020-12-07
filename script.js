var scrollBtn = document.getElementById("scrollBtn");
var text = document.querySelector("footer");

window.scroll = function() {
    if (document.documentElement.scrollTop > 100) {
      scrollBtn.addClass('show');
    } else {
      scrollBtn.removeClass('show');
    }
  };

scrollBtn.onclick = function(e) {
    e.preventDefault();
    if (document.documentElement.scrollTop > 0) {
        document.documentElement.scrollTop = 0;
    };
};

var resumeImage = document.querySelector("#resumeImage");
var resumeButton = document.querySelector(".resumeButton");

resumeButton.onclick = function(e) {
  e.preventDefault();
  resumeImage.removeAttribute("style");
}