
let contact=document.querySelector('.contact');

document.querySelector('#whatsapp-btn').onclick=() =>{
    contact.classList.toggle('active');
   
    navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active');
    
    contact.classList.remove('active');
}
window.onscroll = () =>{
   
    contact.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider"  ,{
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,

    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:1,
            

        },
        768:{
            slidesPerView:2,
           
        },
        1020:{
            slidesPerView:3,
          

        },
    },

});
var swiper = new Swiper(".review-slider"  ,{
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,

    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:1,
            

        },
        768:{
            slidesPerView:2,
           
        },
        1020:{
            slidesPerView:3,
          

        },
    },

});

