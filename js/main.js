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

window.onload = function(){

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

  const swiperCoin = new Swiper('.swiper-coin', {
    slidesPerView: '3',
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    loop: true,
    centeredSlides: true,
    speed: 600,
  })

  let lastScroll2 = 0;

	const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    paused: true,
    multiplier: 0.8,
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



