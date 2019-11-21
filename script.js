let buttonArrow = document.getElementById('button_open');
const educationPanel =document.getElementById('education');
let list = document.getElementById('list');
const descriptions = document.getElementsByClassName('swiper-slide__item');
const buttonDesc = document.getElementsByClassName('description');
const arrayButtons = Array.from(buttonDesc);
const arrayDesc = Array.from(descriptions);



educationPanel.addEventListener('click', () => {
    list.classList.toggle('education-list--hide');
    buttonArrow.classList.toggle('education-open--rotate');
}, false);

arrayButtons.forEach(function(item){
    let param = arrayButtons.indexOf(item);
   
    item.onclick = function(){
        arrayDesc[param].classList.toggle('swiper-slide__item--open');
    }
})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});