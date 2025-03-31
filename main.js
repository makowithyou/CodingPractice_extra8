$("#Slider").slick({
    dots: true,
    autoplay: true,
    centerMode: true,
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
