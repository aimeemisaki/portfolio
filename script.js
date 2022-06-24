// hiding scroll down text
let scrollDown = document.querySelector('.scroll-down')
scrollDown.style.visibility = 'hidden'
// down arrow to scroll on hover
let downArrowBox = document.querySelector('.down-img-box')
let downArrow = document.querySelector('.down-img')

downArrowBox.addEventListener('mouseover', function downMouseOver () {
    scrollDown.style.visibility = 'visible'
    downArrow.style.visibility = 'hidden'
}) 

downArrowBox.addEventListener('mouseout', function downMouseOut () {
    scrollDown.style.visibility = 'hidden'
    downArrow.style.visibility = 'visible'
})


// grabbing header
let header = document.querySelector('header')
// header offset position 
let sticky = header.offsetTop
// functions for sticky header 
function stickyHeader () {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
window.onscroll = function() {stickyHeader()};



