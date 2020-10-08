const shop = document.querySelectorAll('.shop')
const img = document.querySelector('.img-slider')
const navLeft = document.querySelector('.btn.left')
const navRight = document.querySelector('.btn.right')
const shopBanner = document.querySelectorAll('.shop')
const barMenu = document.querySelector('.bar-menu')
const show = document.querySelector('nav ul')
const closeMenu = document.querySelector('.close-bar')

const width = screen.width
let count = 1;
let countShop = 0;

function openBar() {
    show.classList.add('active')
}
function closeBar() {
    show.classList.remove('active')
}
function slideImageRight() {
    count++
    // reset count lebih dari 3
    count == 4 ? count = 1 : '';
    width == 375 ? mobileWidth() : dekstopwidth() ;
}
function slideImageLeft() {
    count--;
    // reset ke 3
    count <= 0 ? count = 3 : ''; 
    width == 375 ? mobileWidth() : dekstopwidth() ;
}
function mobileWidth() {
    img.style.backgroundImage = `url(/images/mobile-image-hero-${count}.jpg)`
}
function dekstopwidth() {
    img.style.backgroundImage = `url(/images/desktop-image-hero-${count}.jpg)`
}
function shopSLideRight() {
    const lastIndex = `${shopBanner.length - 1}`;
    countShop++;
    countShop > lastIndex ? countShop = 0 : '';
    shopBanner[countShop].classList.add('active')
    if ( countShop == 0) {
        shopBanner[lastIndex].classList.remove('active')
    } else {
        shopBanner[`${countShop - 1}`].classList.remove('active')
    }
}
function shopSLideLeft() {
    const lastIndex = `${shopBanner.length - 1}`;
    countShop--;
    // reset jika countnya 0
    countShop < 0  ? countShop = lastIndex : '';
    shopBanner[countShop].classList.add('active')
    if( countShop == lastIndex){
        shopBanner[0].classList.remove('active')
    } else {
        shopBanner[`${countShop + 1}`].classList.remove('active')
    }
}

navLeft.addEventListener('click',shopSLideLeft)
navRight.addEventListener('click',shopSLideRight)
navRight.addEventListener('click', slideImageRight)
navLeft.addEventListener('click', slideImageLeft)
barMenu.addEventListener('click',openBar)
closeMenu.addEventListener('click',closeBar)