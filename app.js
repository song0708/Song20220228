//Loading
$(document).ready(function(){
    setTimeout(function(){
        $(".loading__wrapper").fadeOut(500);
    },3000)
})


const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
//display Mobile Menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);
menuLinks.addEventListener('click',mobileMenu);
//Show active menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const CertMenu = document.querySelector('#Cert-page')
    const projectMenu = document.querySelector('#project-page')
    let scrollPos = window.scrollY;

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < window.innerHeight){ 
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < window.innerHeight*2){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        CertMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos < window.innerHeight*3){
        CertMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        projectMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos < window.innerHeight*4){
        projectMenu.classList.add('highlight')
        CertMenu.classList.remove('highlight')
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600)||elem){
        elem.classList.remove('highlight')

    }
    
}
const whiteMenu = () =>{
    const navbar = document.querySelector('#navbar')
    let scrollPos = window.scrollY;
    if(scrollPos > 80){
        navbar.classList.add('white')
        navbar.classList.remove('navbar')
        return
    }
    else{
        navbar.classList.remove('white')
        navbar.classList.add('navbar')
        return
    }
}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('scroll',whiteMenu);
window.addEventListener('click',highlightMenu);

$('.owl-carousel').owlCarousel({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
