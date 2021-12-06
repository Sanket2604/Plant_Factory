const nav = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if (top>=30) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
    
    if (top>=200) {
        document.querySelector('.gototop').classList.add('active');
    }
    else{
        document.querySelector('.gototop').classList.remove('active');
    }

}
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click',() => {
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
    }
    else {        
        menuBtn.classList.add('open');
    }
});