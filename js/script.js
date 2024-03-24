/* ローディング画面 ↓ */
const loading = document.querySelector('#loading');
const main = document.querySelector('#top');
const keyframes1 = {
    opacity : [.5,0],
};
window.addEventListener('load', () => {
    loading.animate(keyframes1, {
        duration : 1000,
        fill : 'forwards',
    });
    main.animate({
        opacity : [0,1],
    }, {
        duration : 2500,
        fill : 'forwards',
    });
});

/* ローディング画面 ↑ */

/* スライドメニュー ↓ */

const openBtn = document.querySelector('#open_btn');
const closeBtn = document.querySelector('#close_btn');
const sideMenu = document.querySelector('#side_menu');
const menuOptions = {
    duration:1000,
    fill:'forwards',
}

openBtn.addEventListener('click', () => {
    sideMenu.animate({translate : ['100vw', 0]}, menuOptions);
    openBtn.animate({visibility: 'hidden'}, menuOptions);
});
closeBtn.addEventListener('click', () => {
    sideMenu.animate({translate:[0, '100vw']}, menuOptions);
    openBtn.animate({visibility: 'visible'}, menuOptions);
});

/* スライドメニュー ↑ */

/* INTRO アニメーション ↓ */
const introTitle = document.querySelector('#intro_title');
const showIntroTitle = () => {
    introTitle.animate({translate : ['-180px 0', 0]}, 2000);
};

const introTitleObserver = new IntersectionObserver(showIntroTitle);
introTitleObserver.observe(introTitle);

/* INTRO アニメーション ↑ */

/* GALLERY アニメーション ↓ */

const bigItem = document.querySelector('.big_item img');
const items = document.querySelectorAll('.item img');
const links = document.querySelectorAll('.item a');
const bigItemLink = document.querySelector('.big_item a');

items.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        bigItem.src = e.target.src;
        bigItem.animate({opacity:[0,1]}, 500);
    });
});

links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        bigItemLink.href = link.href;
    });
});

const galleryTitle = document.querySelector('#gallery_title');
const showGalleryTitle = () => {
    galleryTitle.animate({
        translate : ['-180px 0',0]}, 2000);
};

const galleryObserver = new IntersectionObserver(showGalleryTitle);
galleryObserver.observe(galleryTitle);

/* GALLERY アニメーション ↑ */

/* CONTACT アニメーション ↓ */

const contactTitle = document.querySelector('#contact_title');
const showContactTitle = () => {
    contactTitle.animate(
        {translate : ['-180px 0', 0]}, 2000);
};

const contactTitleObserver = new IntersectionObserver(showContactTitle);
contactTitleObserver.observe(contactTitle);

/* CONTACT アニメーション ↑ */