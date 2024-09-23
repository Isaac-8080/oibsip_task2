/* light and dark theme toggle */

const body = document.body; // get document body

const savedLocalStorage = localStorage.getItem('theme', 'light'); // getting theme status in localStorage


// localStorage to check if the theme is light
if (savedLocalStorage === 'light') {
  
  body.classList.add('light-theme');

  document.querySelector('#nav').classList.add('light-theme');

  document.querySelector('#sm-navbar').classList.add('light-theme');

  document.querySelector('#hero-section').classList.add('whiteHeroBg');
  
} else {
  
  body.classList.add('dark-theme');
  
  document.querySelector('#nav').classList.add('dark-theme');
  
  document.querySelector('#sm-navbar').classList.add('dark-theme');

  document.querySelector('#hero-section').classList.remove('whiteHeroBg');
  
}

const getThemeToggle = document.getElementsByClassName('theme-btn');

for (let i = 0; i < getThemeToggle.length; i++) {
  
  getThemeToggle[i].addEventListener('click', () => {
    
    if (body.classList.contains('dark-theme')) {

      body.classList.remove('dark-theme');

      body.classList.add('light-theme');

      document.querySelector('#nav').classList.remove('dark-theme');

      document.querySelector('#nav').classList.add('light-theme');
      
      document.querySelector('#sm-navbar').classList.remove('dark-theme');
      
      document.querySelector('#sm-navbar').classList.add('light-theme');

      document.querySelector('#hero-section').classList.add('whiteHeroBg');
      
      localStorage.setItem('theme', 'light');
      
    } else {
      
      body.classList.remove('light-theme');
      
      body.classList.add('dark-theme');

      document.querySelector('#nav').classList.remove('light-theme');
      
      document.querySelector('#nav').classList.add('dark-theme');
      
      document.querySelector('#sm-navbar').classList.remove('light-theme');

      document.querySelector('#sm-navbar').classList.add('dark-theme');
      
      document.querySelector('#hero-section').classList.remove('whiteHeroBg');

      localStorage.setItem('theme', 'dark');

    }

  });
  
}


/*small screen navbar toggle*/

// navbar status
let getNavbarStatus = false;

// targets the menu icon
let getToggleNavIcon = document.querySelector('#toggleNavIcon');

// event listener which toggles navigation menu on small screens
getToggleNavIcon.addEventListener('click', () => {

  let getNavbar = document.querySelector('.sm-navbar');
  
  let getNavbarUl = document.querySelector('.sm-navbar ul');

  if (getNavbarStatus === false) {

    getNavbar.style.height = '100%';
    
    getNavbarUl.style.visibility = 'visible';

    getNavbarStatus = true;
  }

});

// targets the close icon
let getExitNavMenu = document.getElementsByClassName('exit-nav');

for (let i = 0; i < getExitNavMenu.length; i++) {
 
  // event listener which closes navigation menu on small screens
  getExitNavMenu[i].addEventListener('click', () => {
  
    let getNavbar = document.querySelector('.sm-navbar');
  
    let getNavbarUl = document.querySelector('.sm-navbar ul');
  
    if (getNavbarStatus === true) {
  
      getNavbar.style.height = '0';
  
      getNavbarUl.style.visibility = 'hidden';
  
      getNavbarStatus = false;
  
    };
  
  });
  
}


// navbar opacity fixed on scroll
document.addEventListener('scroll', () => {

  if (window.scrollY > 5) {

    document.querySelector('#nav').classList.remove('navbar-transparent');
    
    document.querySelector('#backToTop').classList.remove('hidden');
    
  } else {
    
    document.querySelector('#nav').classList.add('navbar-transparent');

    document.querySelector('#backToTop').classList.add('hidden');

  }
  
});