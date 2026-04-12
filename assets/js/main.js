/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER CAR ===============*/
const swiperHome = new Swiper('.home--swiper', {
   speed:1200,
   effect:'fade',


  pagination: {
    el: '.swiper-pagination',
   clickable:true,
   renderBullet:  (index, className) => {
      return '<span class="' + className + '">' + (index + 1).padstart(2, '0') + "</span>";
      },
  },
});

/*=============== GSAP ANIMATION ===============*/


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)