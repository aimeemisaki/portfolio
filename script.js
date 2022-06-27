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

// PROJECTS PAGE

//resume btn
let resumeBtn = document.querySelector('.resume-btn')
let resumeModal 
// open resume PDF
resumeBtn.addEventListener('click', function openResume () {
    window.open
})


// CONTACT ME PAGE

// setting up email button
let emailBtn = document.querySelector('#email-btn')
// open email app event listner
emailBtn.addEventListener('click', function openEmail () {
    window.open ('mailto:aimeejmisaki@gmail.com')
})

// setting up phone button and phone modal
let phoneBtn = document.querySelector('#phone-btn')

let phoneModal = document.querySelector('.phone-modal-box')

let phoneSubmitBtn = document.querySelector('.phone-submit')

let phoneNum = document.querySelector('.phone-modal-answer')

phoneNum.style.display = 'none'

// before phone click event
// phoneModal.style.visibility = 'hidden'
// phone buttone event listener
phoneBtn.addEventListener('click', function phoneModalPopup () {
    phoneModal.style.display = 'visible'
})

//phone modal event listener

let firstNameInput = document.querySelector('#first-name')
let lastNameInput = document.querySelector('#last-name')

let nameAnswer = document.querySelector('.phone-modal-answer-box')

// phone modal event listeners

phoneSubmitBtn.addEventListener('click', function namesInput () {
    if (firstNameInput == 'Aimee' && lastNameInput == 'Misaki') {
        phoneNum.style.display = 'inline-block'
    } else { 
        window.alert('Wrong name!')
    }
})











// FOOTER

// linkedin click event listener 

let footerLinkedinBtn = document.querySelector('#footer-linkedin-link')

footerLinkedinBtn.addEventListener('click', function LinkedinLink () {
    window.open('https://www.linkedin.com/in/aimee-misaki-1a6b5212a/', '_blank');
})

// github click even listener

let footerGithubBtn = document.querySelector('#footer-github-link')

footerGithubBtn.addEventListener('click', function GitHubLink () {
    window.open('https://github.com/aimeemisaki')
})

// codepen click event listener 

let footerCodePenBtn = document.querySelector('#footer-codepen-link') 

footerCodePenBtn.addEventListener('click', function CodePenLink () {
    window.open('https://codepen.io/aimeemisaki')
})