// SCROLL DOWN ARROW //

// hiding scroll down text
let scrollDown = document.querySelector('.scroll-down')
scrollDown.style.visibility = 'hidden'

// grabbing downarrow and downarrow container elements
let downArrowBox = document.querySelector('.down-img-box')
let downArrow = document.querySelector('.down-img')

// adding hover functions to down arrow 
downArrowBox.addEventListener('mouseover', function downMouseOver () {
    scrollDown.style.visibility = 'visible'
    downArrow.style.visibility = 'hidden'
}) 

downArrowBox.addEventListener('mouseout', function downMouseOut () {
    scrollDown.style.visibility = 'hidden'
    downArrow.style.visibility = 'visible'
})



// HEADER (NAV BAR) //
// grabbing header
let header = document.querySelector('header')

// assigning offsetTop header to sticky variable 
let sticky = header.offsetTop

// grabbing header texts
let headerTxts = document.querySelectorAll('.header-txt')

// hover header texts
headerTxts.forEach((headerTxt) => {
    headerTxt.addEventListener('mouseover', function stickyMouseover () {
        headerTxt.style.color="lightgrey"
    })
    headerTxt.addEventListener('mouseout', function stickyMouseout () {
        headerTxt.style.color="grey"
    })
})

// header text event listeners 
//grabbing header texts


// function for sticky header // changing header to white on scroll // changing font color 
// ??? header not changing to transparent
function stickyHeader () {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
        header.style.background ='white'

    } else {
        header.classList.remove('sticky'),
        header.style.background ='transparent'
    
    } 
  };

// calling stickyHeader function when window scrolls
window.onscroll = function() {stickyHeader()};


// WELCOME PAGE //

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

// grabbing email button
let emailBtn = document.querySelector('#email-btn')

// open email app event listner
emailBtn.addEventListener('click', function openEmail () {
    window.open ('mailto:aimeejmisaki@gmail.com')
})

// grabbing phone button
let phoneBtn = document.querySelector('#phone-btn')

// phoneBtn pop up event listener
phoneBtn.addEventListener('click', function showNumber () {
    window.alert('You can reach me at (213)-271-8849!')
})


// FOOTER

// linkedin click event listener 

let footerLinkedinBtn = document.querySelector('.footer-linkedin-link-box')

footerLinkedinBtn.addEventListener('click', LinkedinLink)

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


// STRETCH GOALS //

// let phoneModal = document.querySelector('.phone-modal-box')

// let phoneSubmitBtn = document.querySelector('.phone-submit')

// let phoneNum = document.querySelector('.phone-modal-answer')

// hiding phoneModal before clicking on phoneBtn

// hiding phoneNum before phoneModal question
// phoneNum.style.visibility ="hidden"

// before phone click event
// phoneModal.style.visibility = 'hidden'
// phoneBtn click event listener
// phoneBtn.addEventListener('click', function phoneModalPopup () {
//     phoneModal.style.display = 'visible'
// })
// //phone modal event listener

// //grabbig input elements
// let firstNameInput = document.querySelector('#first-name')
// let lastNameInput = document.querySelector('#last-name')



// // phone modal event listeners

// phoneSubmitBtn.addEventListener('click', function namesInput () {
//     if (firstNameInput == "Aimee" && lastNameInput == "Misaki") {
//         phoneNum.style.visibility="visible"
//     } else { 
//         window.alert('Wrong name!')
//     }
// })











