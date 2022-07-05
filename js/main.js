$(document).ready(function() {
  "use strict";

    if ($.fn.classyNav) {
        $('#roamingnav').classyNav();
    }

    // scrollspy
    $('body').scrollspy({
        offset: 190,
        target: '.dtr-scrollspy'
    });
    
    // nav scroll   
    var myoffset = $('#dtr-header-global').height();
    $('.navbar a[href^="#"]').click(function(){  
        event.preventDefault();  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - myoffset
        }, "slow","easeInSine");
    });

    //stickyatTop
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 670) {
            $(".scrollheader").addClass("is-sticky");
            $('.scrollheader').css('position', 'fixed');
        } else {
            $(".scrollheader").removeClass("is-sticky");
            $(".scrollheader").css('position', 'relative');
        }
    });

    //Nice Select
    // $('select').niceSelect();

    //LightBox / Fancybox
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });

    //Main slider
    $('.mainslider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
         navText: [
                "<i class='icofont-arrow-left'></i>",
                "<i class='icofont-arrow-right'></i>",
            ],
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    /*  Team-Slider-Owl-carousel  */
    if($('.skillslider').length){
        $('.skillslider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            nav:true,
            rtl:false,
            autoplayHoverPause:false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            center:false,
            navText: [
              '<i class="icofont-simple-left"></i>',
              '<i class="icofont-simple-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                520:{
                    items:2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 4,
                }
            }
        })
    }

    });