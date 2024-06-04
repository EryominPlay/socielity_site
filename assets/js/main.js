document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".brands-slider .swiper", {
        slidesPerView: 2,
        spaceBetween: 8,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 6,
            },
        },
    });
})