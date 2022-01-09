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
            url("../img/content_images/content-partners-img${i}.png") center no-repeat;
            background-size: cover, cover;`
    });
});