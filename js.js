burger = document.querySelector('.burger');
navbar = document.querySelector('.nav-bar');
links = document.querySelector('.links');
social_links = document.querySelector('.social-links');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    links.classList.toggle("v-class");
    social_links.classList.toggle("v-class");
})