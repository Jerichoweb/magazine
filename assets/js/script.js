$( document ).ready(function() {
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: false
        
    });

    $("#arrow-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#find-course").offset().top
        }, 2000);
    });

    $('.course-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        autoplay: false,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.users-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
        
    });
});

