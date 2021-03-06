let burgerButton = document.querySelector('.header__burger');
let closeButton = document.querySelector('.menu__close-button');
let menu = document.querySelector('.header__menu');

burgerButton.addEventListener('click', function () {
    menu.classList.add('active');
});

closeButton.addEventListener('click', function () {
    menu.classList.remove('active');
})

let spoiler = document.querySelectorAll('.opp-block__spoiler');

spoiler.forEach(elem => {
    elem.addEventListener('click', function () {
        if (elem.children[1].classList.contains('active')) {
            elem.style.cssText = `background-color: #F3F7F9;`
            elem.children[1].classList.remove('active');
            elem.children[0].children[0].classList.remove('active');
            elem.children[0].children[2].classList.remove('active');
        } else {
            elem.style.cssText = `background-color: #fff;`
            elem.children[1].classList.add('active');
            elem.children[0].children[0].classList.add('active');
            elem.children[0].children[2].classList.add('active');
        }
    });
});

let companyLogo = document.querySelectorAll('.use-block__info__about__company');
let companyText = document.querySelectorAll('.use-block__info__about__elem');
let companyImg = document.querySelector('.use-block__info__images');

companyLogo.forEach(function callback(elem, i) {
    elem.addEventListener('click', function () {
        companyLogo.forEach(logo => {
            logo.classList.remove('active');
        });
        companyText.forEach(text => {
            text.classList.remove('active');
        });
        elem.classList.add('active');
        companyText[i].classList.add('active');
        companyImg.style.cssText = `background:
            linear-gradient(358.75deg, #000000 0.87%, rgba(0, 0, 0, 0) 65.78%) bottom left,
            url("img/content_images/content-partners-img${i}.png") center no-repeat;
            background-size: cover, cover;`
    });
});


let infoSwiper = new Swiper(".info-swiper", {
    pagination: {
        el: ".info-block-swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            switch (index) {
                case 0:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">???????????? ???? ??????????????????????</p>'
                        +
                        '<p class="info-block__pagination__item__text">?????????? ???????????????? ???????????????????? ??????????  MIfare</p>'
                        +
                        "</div>";
                case 1:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">?????????????????????? ??????????????????????</p>'
                        +
                        '<p class="info-block__pagination__item__text">???????????? ?? ????????????????</p>'
                        +
                        "</div>";
                case 2:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">???????? ????????????</p>'
                        +
                        '<p class="info-block__pagination__item__text">???????????????????????????? ?????????? ????????????</p>'
                        +
                        "</div>";
                case 3:
                    return '<div class="info-block__pagination__item ' + className + '">'
                        +
                        '<p class="info-block__pagination__item__title">????????????????????????????</p>'
                        +
                        '<p class="info-block__pagination__item__text">????????????????????????, ?????????????????????????????????? ????????????</p>'
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
    slidesPerView: 'auto',
    //centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".partners-swiper-button-next",
        prevEl: ".partners-swiper-button-prev",
    }
});


$(document).ready(function(){
    
    if(window.innerWidth>991){    
        $('.header__container').addClass('fadeInDown animated');
        new WOW().init({});
    }
    
    
 
    $(document).on('click', '.calc__minus', function(){ 
        var val=parseInt($(this).parent('.calc').find('.calc__input').val());
        var new_val=val-1;
        if(new_val<1)
        {
            new_val=0;
            $(this).addClass('disabled');
            $(this).parent('.calc').find('.calc__input').addClass('disabled');   
        } 
        $(this).parent('.calc').find('.calc__input').val(new_val);           
        return false;  
    })
    
    $(document).on('click', '.calc__plus', function(){ 
        var val=parseInt($(this).parent('.calc').find('.calc__input').val());
        var new_val=val+1;

        $(this).parent('.calc').find('.calc__minus').removeClass('disabled');        
        $(this).parent('.calc').find('.calc__input').removeClass('disabled');        
        $(this).parent('.calc').find('.calc__input').val(new_val);    
        
        $('.y-section-choose-aside-btn').addClass('active');
        
        if($(this).parents('.equipment-item').length){
            $('#choosen').fadeIn();
        }
        
        return false;  
    })
    
    $('#sidebar').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 20,
        minWidth: 1200
    });
    
    $('#sidebar-2').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 20,
        minWidth: 991
    });
    
     $('.js-tooltip').tooltipster({
        maxWidth: 240,
         side:'right'
    });
    
    $(document).ready(function(){$(".map__legend").mCustomScrollbar({theme:"vgl-theme"})});
    
    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth > 576 ? 'vertical' : 'horizontal';
        return direction;
      }
    
    if($('.y-product-images').length){
        var swiperThumbs = new Swiper(".y-product-images", {
            direction: getDirection(),
            spaceBetween: 10,
            slideToClickedSlide: true,
            slidesPerView: 'auto',
            //loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            on: {
              resize: function () {
                swiperThumbs.changeDirection(getDirection());
              },
            },

            breakpoints: {
              576: {
                slidesPerView: 4,
              }
            }
        });

        $(window).on('resize', function () {
             swiperThumbs.changeDirection(getDirection());
        });

        var swiper = new Swiper('.y-product-images-main', {
            spaceBetween: 10,
            thumbs: {
              swiper: swiperThumbs,
            },
        });
    }

    var solutions = undefined;    
    var init = false;

    /* Which media query
    **************************************************************/
    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 992px)');
        let desktop = window.matchMedia('(min-width: 1025px)');

        // Enable (for mobile)
        if(mobile.matches) {
            if (!init) {
                init = true;
                solutions = new Swiper('.solutions', {
                    slidesPerView:'auto',
                    spaceBetween:0,
                    loop:false,
                    mousewheel: false          
                })
            }
        }
        else {        
            if (solutions != undefined) {
               solutions.destroy();
            } 
            init = false;      
        }
    }
    
    swiperMode();
    
    $(window).on('load resize', function() {        
        swiperMode();
    });

});
