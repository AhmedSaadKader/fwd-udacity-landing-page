/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBarList = document.querySelector('#navbar__list');
// window height to get active section 
const height = window.innerHeight;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function to append sections to navigation ul


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// function()
const appendNavigation = function (sectionArr, navLi){
    // loop through array of sections available
    sectionArr.forEach(function(section){
        const li = document.createElement('li');
        // add section heading to created list
        li.innerHTML = section.getAttribute('data-nav');
        // add style to created lists
        li.setAttribute('class', 'menu__link');
        // append to navigation bar
        navLi.appendChild(li);
    })
}

// Add class 'active' to section when near top of viewport
const sectionIsActive = function(){
    let activeSection = document.querySelector('.your-active-class');
    // loop through sections list to detect 
    sections.forEach(function(section){
        // remove existing active class
        section.classList.remove('your-active-class');
        // get active section
        if ( height/3 >= section.getBoundingClientRect().top){
            activeSection = section;
        };
    });
    // add active class for proper section
    activeSection.classList.add('your-active-class');
}

// Scroll to anchor ID using scrollTO event
const scrollToSection = function (event){
    const sectionClickedText = event.target.textContent;
    // scroll to clicked section by scrollIntoView function using data-nav identifier
    document.querySelector('[data-nav='+'"'+sectionClickedText+'"'+']').scrollIntoView();
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
appendNavigation(sections, navBarList);

const navLists = document.querySelectorAll('li');
// Scroll to section on link click-
for (let list = 0; list < navLists.length; list++) {
    const element = navLists[list];
    element.addEventListener('click', scrollToSection);
};

// Set sections as active
document.addEventListener('scroll', sectionIsActive);

// Hide navigation bar when not scrolling
window.addEventListener('scroll', function(){  
    var navigationTag = document.querySelector('#navbar__list');
    navigationTag.classList.remove('no-display-navbar')
    setTimeout(function(){
        navigationTag.classList.add('no-display-navbar')
    }, 1250)
})

var sheet = document.createElement('style')
sheet.innerHTML = ".no-display-navbar {display: none; transition:all 1s}";
document.body.appendChild(sheet);