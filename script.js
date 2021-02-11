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

// function for emailjs

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_dareza', 'template_dareza', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}