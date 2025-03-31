$("#Slider").slick({
    dots: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: "18%",
    prevArrow: '<span class="prev-arrow"></span>',
    nextArrow: '<span class="next-arrow"></span>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                centerMode: false,
            }
        }
    ]
});
