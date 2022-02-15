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

let activeSection = document.querySelector('.your-active-class');


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
    return activeSection
}

// Add active class to list item when its relevant section is active
const navListIsActive = function(){
    let activeList = document.querySelector('li')
    navLists.forEach(function(list) {

        list.classList.remove('active-list')
        if (list.textContent === activeSection.getAttribute('data-nav')){
            activeList = list
        }
    })
    activeList.classList.add('active-list');
}



// Scroll to anchor ID using scrollTO event
const scrollToSection = function (event){
    const sectionClickedText = event.target.textContent;
    // scroll to clicked section by scrollIntoView function using data-nav identifier
    document.querySelector('[data-nav='+'"'+sectionClickedText+'"'+']').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    event.preventDefault()
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
document.addEventListener('scroll', navListIsActive)

// Add styling css for active list item
const sheet = document.createElement('style')
sheet.innerHTML = ".active-list {  background: lightblue; color: green; transition: ease 0.3s all;}";
document.body.appendChild(sheet);

