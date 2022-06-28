# Aimee Misaki's Portfolio

## Portfolio Link

[PortfolioGitHub](https://aimeemisaki.github.io/portfolio/)
<br/>
## Screenshots of Portfolio

![WelcomePage](/readme-images/welcomepage.png)

![WorkExperiencePage](/readme-images/workexperiencepage.png)

![ProjectsPage](/readme-images/projectspage.png) 

![ContactPage](/readme-images/contactpage.png)

## Wireframes

![Wireframe1](/readme-images/wireframe1.png)

![Wireframe2](/readme-images/wireframe2.png)

![Wireframe3](/readme-images/wireframe3.png)

![Wireframe4](/readme-images/wireframe4.png)

## Tech Stack

* HTML/CSS
* Javascript


```js
let header = document.querySelector('header');
let sticky = header.offsetTop;
let headerTxts = document.querySelectorAll('.header-txt');
function stickyHeader () {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
        header.style.backgroundColor ="white"
    } else {
        header.classList.remove('sticky')
        header.style.backgroundColor ="#a9a9a9"
        headerTxts.forEach((headerTxt) => headerTxt.style.color = 'white')
        headerTxts.forEach((headerTxt) => {
            headerTxt.addEventListener('mouseout', function offTopMouseout () {
                headerTxt.style.color = 'white'
            })
        })
    } 
  };
  ```

## Approach

I started by writing the HTML, CSS and JS for the first section (Welcome Page and Header). I soon realized that, due to making all of my sections on one page, it was more efficient to first write out all of the HTML elements first; then, I would move on to doing basic CSS styling. The biggest (and arguably the most exciting) part was writing out the Javascript - each time, writing out pseudocode for what script I was writing (eg. pulling elements from the document, explaining what functions were doing, etc.). By doing so, it was easier to go back to those functions and event listeners to debug if there was an error. Looking at my javascript now, I am proud at how organized it is and believe that any viewer would be able to understand what each function/event listener is doing. I also implemented simple styling that makes my website both visually pleasing and easy to navigate and understand.

## User Stories 

* As a software engineer recruiter, I would like to see that my potential junior developer has the ability to use different JS event handlers, so that they can be ready to use them for our projects.
* As a recruiter from a creative company, I would like to see a visually clean and pleasing website, so that they can work both front and back end.
* As a recruiter from a global company, I would like to see that my potential employee has had global work experience.



## Unsolved Problems / Major Hurdles

* Changing dimensions of elements according to different media sizes
* Use of flexbox in general, especially for Work Experience Page

## Future Stretch Goals 

* Adding a questionnaire input to access my phone number 
* Editing elements according to more media sizes 
* Creating my own background images that shrink
* Carousel for Project Page when I have more projects
