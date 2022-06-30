//Fire CSS V 0.1.6
//@author: Fire de NICPRO SERVICE
//nicproservice (https://nicprodev.mgpanel.org)
//Realizado por Nicolás Gómez
//Copyright © 2022
//Licencia: MIT

//Slider

//Navbar
let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .fa-search');

searchBox.addEventListener('click', () => {
   navbar.classList.toggle('showInput');
   if(navbar.classList.contains('showInput')){
     searchBox.classList.replace('fa-search', 'fa-times');
   }
   else{
     searchBox.classList.replace('fa-times', 'fa-search');
   }
});


//Navbar-Sidebar Open Close JS Code

let menuOpenBtn = document.querySelector('.navbar .fa-bars');
let closeOpenBtn = document.querySelector('.nav_links .fa-times');
let navLinks = document.querySelector('.nav_links');

menuOpenBtn.addEventListener('click', () => {
   navLinks.style.left = '0';
});

closeOpenBtn.addEventListener('click', () => {
   navLinks.style.left = '-100%';
});

//Navbar Sub-Menu

let arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
   navLinks.classList.toggle('showSubMenu');
});

let moreArrow = document.querySelector('.more-arrow');
moreArrow.addEventListener('click', () => {
   navLinks.classList.toggle('showSubMenu2');
});

//Dropdown
function show(anything){
   document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
   dropdown.classList.toggle('active');
}

//MODAL

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = "is-visible";

for (const el of openEls) {
   el.addEventListener("click", function(){
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
   });
}

for (const el of closeEls) {
   el.addEventListener("click", function(){
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
   });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".fir-modal.is-visible")) {
    document.querySelector(".fir-modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".fir-modal.is-visible")) {
    document.querySelector(".fir-modal.is-visible").classList.remove(isVisible);
  }
});

//Temas


//Scroll Up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
   var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

   if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
       window.scrollTo (0, currentScroll - (currentScroll / 10));
       buttonUp.style.transform = "scale(0)";
   }
}
///
buttonUp = document.getElementById("button-up");

window.onscroll = function(){

   var scroll = document.documentElement.scrollTop;
   if (scroll > 500){
      buttonUp.style.transform = "scale(1)";
   }else if(scroll < 500){
      buttonUp.style.transform = "scale(0)";
   }
}