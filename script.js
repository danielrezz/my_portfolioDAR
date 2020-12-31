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

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});