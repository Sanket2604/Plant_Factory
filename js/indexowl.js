$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        nav: true,
        loop:true,
        navText: ["<div class='prev-slide'><i class='fa fa-chevron-left'></i></div>",
        "<div class='next-slide'><i class='fa fa-chevron-right'></i></div>"],
        smartSpeed:5000,
        slideTransition:'linear',
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            860:{
                items:3,
            },
            1190:{
                items:4,
            }
        }
    });
});