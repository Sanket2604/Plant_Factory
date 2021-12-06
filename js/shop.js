const nav = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if (top>=30) {
        nav.classList.add('active');
        document.querySelector('.type_filter').classList.add('active');
    }
    else{
        document.querySelector('.type_filter').classList.remove('active');
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


function addactive1(){
    document.querySelector('.category1').classList.add('active');
    document.querySelector('.category2').classList.remove('active');
    document.querySelector('.category3').classList.remove('active');
    document.querySelector('.category4').classList.remove('active');
}
function addactive2(){
    document.querySelector('.category2').classList.add('active');
    document.querySelector('.category1').classList.remove('active');
    document.querySelector('.category3').classList.remove('active');
    document.querySelector('.category4').classList.remove('active');
}
function addactive3(){
    document.querySelector('.category3').classList.add('active');
    document.querySelector('.category2').classList.remove('active');
    document.querySelector('.category1').classList.remove('active');
    document.querySelector('.category4').classList.remove('active');
}
function addactive4(){
    document.querySelector('.category4').classList.add('active');
    document.querySelector('.category2').classList.remove('active');
    document.querySelector('.category3').classList.remove('active');
    document.querySelector('.category1').classList.remove('active');
}