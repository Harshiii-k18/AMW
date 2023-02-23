function gotowhatsapp() {

   
   

    var url = "https://wa.me/919636757008?text="
     
     

    window.open(url, '_blank').focus();
};
function sendEmail(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let message=document.getElementById("message").value;
    let body="Name:" + name + "<br> Email: " + email + "<br> Contact Number: " + number + 
    "<br> Query: " + message;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "antiquemarblekishangarh@gmail.com",
        Password : "89B5301E9BC11846B9CE8DB0F070F6C1B5CA",
        To : 'antiquemarbleworld@gmail.com',
        From : "antiquemarblekishangarh@gmail.com",
        Subject : "New Enquiry!",
        Body : body
    }).then(
      message => alert(message)
    );

};
function sendEmailForm(){
    let name=document.getElementById("formname").value;
    let email=document.getElementById("formemail").value;
    let number=document.getElementById("contactnumber").value;
    let message=document.getElementById("formmessage").value;
    let body="Name:" + name + "<br> Email: " + email + "<br> Contact Number: " + number + 
    "<br> Query: " + message;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "antiquemarblekishangarh@gmail.com",
        Password : "89B5301E9BC11846B9CE8DB0F070F6C1B5CA",
        To : 'antiquemarbleworld@gmail.com',
        From : "antiquemarblekishangarh@gmail.com",
        Subject : "New Enquiry!",
        Body : body
    }).then(
      message => alert(message)
    );

};
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  };

let contact=document.querySelector('.contact');

document.querySelector('#chat').onclick=() =>{
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
        delay:5000,
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
var swiper = new Swiper(".blogs-slider"  ,{
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay:3000,
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

