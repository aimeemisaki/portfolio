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

// HEADER (NAV BAR) JS


// grabbing header
let header = document.querySelector('header')

// header offset position 
let sticky = header.offsetTop
header.style.background = 'transparent'

// grabbing header texts
let headerTxt = document.querySelector('.header-txt')
let aimeeTxt = document.querySelector('#aimee')

// function for sticky header // changing header to white on scroll // changing font color 
// ?? why is header text not changing color
function stickyHeader () {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
      header.style.background = 'white';
      headerTxt.style.color = 'lightgrey';
    } else {
      header.classList.remove('sticky');
      header.style.background = 'transparent'
      headerTxt.style.color = 'grey'
    }
  }
window.onscroll = function() {stickyHeader()};

// header txt mouseover change color
// grabbing txt elements

// mouseover / mouseout events 
// headerTxt.addEventListener('mouseover', function headerTxtMouseover () {
//     headerTxt.style.color = 
// })


// WELCOME PAGE

// opening new tab for linkedin
let linkedinBtn = document.querySelector('.linkedin-btn')
linkedinBtn.addEventListener ('click', function LinkedinLink () {
    window.open('https://www.linkedin.com/in/aimee-misaki-1a6b5212a/', '_blank');
})



