const body = document.querySelector('.body');
const btnBanner = document.querySelector('#btnBanner');
const banner = document.querySelector('.banner');
const textAdditional = document.querySelector('#textAdditional');
const headerMo = document.querySelector('header.mo');


btnBanner.addEventListener('click', () => {
  banner.classList.add('close')
  body.classList.add('hide-banner')
})

textAdditional.addEventListener('keyup', (e) => {
  const length = e.target.value.length
  const maxLength = e.target.getAttribute('maxlength')
  const span = e.target.nextElementSibling
  span.innerText = `${length}/${maxLength}`
})

const swiper = new Swiper('.swiper-block', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 25,
})

const swiper2 = new Swiper('.swiper-membership', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 25,
})

// locomotive-scroll
// const cards = document.querySelectorAll('.sec-slide .card');
// cards.forEach(e => {
//   const img = e.querySelector('.card-img');
//   const title = e.querySelector('.card-title');
//   const des = e.querySelector('.card-des');
//   //img, title, des에 data-scroll 속성 추가
//   img.setAttribute('data-scroll', '');
//   title.setAttribute('data-scroll', '');
//   des.setAttribute('data-scroll', '');
//   //img, title, des에 data-scroll-speed 속성 추가
//   img.setAttribute('data-scroll-speed', '1.5');
//   title.setAttribute('data-scroll-speed', '2');
//   des.setAttribute('data-scroll-speed', '2.5');
// });
let lastScroll2 = 0;

window.onload = function(){
	const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    paused: true,
    multiplier: 0.9,
    onUpdate: () => {
      window.dispatchEvent(new Event('resize'));
    },
  });
  scroll.on('scroll', (instance) => {
    const currentScroll = instance.scroll.y;
    if(currentScroll > lastScroll2){
      header.classList.add('hide')
    }
    else{
      header.classList.remove('hide')
    }
    lastScroll2 = currentScroll;
  });
}



