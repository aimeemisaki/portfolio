// header 
let header = document.querySelector('.header')
// header offset position 
let sticky = header.offsetTop
// functions for sticky header 
body.onscroll = function() {stickyHeader()};

function stickyHeader () {
    if (body.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }