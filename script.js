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
let welcomePageHeader = document.querySelector('#aimee')
let workExperiencePageHeader = document.querySelector('#work-experience')
let projectsPageHeader = document.querySelector('#projects-header')
let contactMePageHeader = document.querySelector('#contact-me')

//grabbing sections
let welcomePage = document.querySelector('#welcome-page')
let workExperiencePage = document.querySelector('#work-experience-page')
let projectsPage = document.querySelector('.projects-skills-box')
let contactMePage = document.querySelector('#contactme-page')

// header text functions

// welcomePageScroll click event
welcomePageHeader.addEventListener('click', function welcomePageScroll () {
    welcomePage.scrollIntoView()
})

// workExperiencePageScroll click event
workExperiencePageHeader.addEventListener('click', function workExperiencePageScroll () {
    workExperiencePage.scrollIntoView()
})

// projectsPageScroll click event
projectsPageHeader.addEventListener('click', function projectsPageScroll () {
    projectsPage.scrollIntoView()
})

// contactMePageScroll click event
contactMePageHeader.addEventListener('click', function contactMePageScroll () {
    contactMePage.scrollIntoView()
})


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

// WORK EXPERIENCE PAGE //
// grabbing resume btn and resume-modal
let resumeBtn = document.querySelector('.resume-btn')

// open resume PDF
resumeBtn.addEventListener('click', function openResume () {
    window.open('https://drive.google.com/file/d/1gZUlmY47Db55x_t2PPa7epc8_VQR4ZzB/view?usp=sharing', '_blank')
}) 



// PROJECTS PAGE //


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


footerLinkedinBtn.addEventListener('click', function footerLinkedinLink () {
    window.open('https://www.linkedin.com/in/aimee-misaki-1a6b5212a/', '_blank')
})

// github click even listener

let footerGithubBtn = document.querySelector('#footer-github-link')

footerGithubBtn.addEventListener('click', function GitHubLink () {
    window.open('https://github.com/aimeemisaki', '_blank')
})

// codepen click event listener 

let footerCodePenBtn = document.querySelector('#footer-codepen-link') 

footerCodePenBtn.addEventListener('click', function CodePenLink () {
    window.open('https://codepen.io/aimeemisaki', '_blank')
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











