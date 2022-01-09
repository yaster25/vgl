let infoSwiper = new Swiper(".info-swiper", {
    pagination: {
        el: ".info-block-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            switch (index) {
                case 0:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">Защита от копирования</p>'
                        +
                        '<p class="info-block__pagination__item__text">Новый протокол считывания меток  MIfare</p>'
                        +
                        "</div>";
                case 1:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">Программное обеспечение</p>'
                        +
                        '<p class="info-block__pagination__item__text">Анализ и контроль</p>'
                        +
                        "</div>";
                case 2:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">База данных</p>'
                        +
                        '<p class="info-block__pagination__item__text">Неограниченный архив данных</p>'
                        +
                        "</div>";
                case 3:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">Ударопрочность</p>'
                        +
                        '<p class="info-block__pagination__item__text">Ударопрочный, водонепроницаемый корпус</p>'
                        +
                        "</div>";
            }
        },
    },
    navigation: {
        nextEl: ".info-swiper-button-next",
        prevEl: ".info-swiper-button-prev",
    },
});

let priceSwiper = new Swiper(".price-swiper", {
    effect: "cards",
    grabCursor: true
});

let partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 7,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".partners-swiper-button-next",
        prevEl: ".partners-swiper-button-prev",
    }
});