let switcher = document.getElementById('desktop');
let body = document.querySelector('body');
let text = document.getElementById('text');

switcher.addEventListener('click', () => {
    if(text.innerHTML === 'Mobile'){
        body.style.width = "375px";
        text.innerHTML = 'Desktop';
    }
    else {
        body.style.width = '100%';
        text.innerHTML = 'Mobile';
     } 
})



