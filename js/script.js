let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchForm.classList.toggle('active');
    contact.classList.remove('active');
    navbar.classList.remove('active');
}
let contact=document.querySelector('.contact');

document.querySelector('#whatsapp-btn').onclick=() =>{
    contact.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    contact.classList.remove('active');
}
window.onscroll=()=>{
    searchForm.classList.remove('active');
    contact.classList.remove('active');
    navbar.classList.remove('active');
}
