const allhoverImages=document.querySelectorAll('.hover-container div img')
const imgContainer=document.querySelector('.img-container');
window.addEventListener('DOMContentLoaded', () =>{
    allhoverImages[0].parentElement.classList.add('active');
});
allhoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        

    });

});