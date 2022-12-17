$(document).ready(function() {
    
    $('.box-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.review-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});