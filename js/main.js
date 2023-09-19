
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    

    breakpoints: {
       561: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
        },

        991: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
        },
        1170: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Фиксированная шапка
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let scrollPos = 200;
    let header = document.querySelector('.header__maxcontainer');

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// Burger

const burger = document.querySelector('.header__burger');


if (burger) {
    const menu = document.querySelector('.header__menu');

    burger.addEventListener('click', function (e) {
        menu.classList.toggle('active');
    })

}
