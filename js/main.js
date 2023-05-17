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

window.onload = function () {

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
    slidesPerView: 2,
    spaceBetween: 0,

    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    loop: true,
    centeredSlides: true,
    speed: 600,
    breakpoints: {
      // 500px 보다 클 경우
      500: {
        slidesPerView: '3',
      }
    }
  })


  //locomotive scroll
  const articleVideo = document.querySelector('.article-video');
  const videoImgBox = articleVideo.querySelector('.box-img');
  const videoButtonBox = articleVideo.querySelector('.box-btn');
  const secMember = document.querySelector('.sec-membership.pc');
  //secMember의 marquee-1
  const marquee1 = document.querySelector('.marquee-1');
  const marquee2 = document.querySelector('.marquee-2');
  //secMember의 절대위치
  const secMemberTop = secMember.getBoundingClientRect().top;
  let lastScroll2 = 0;

  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
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
      const memberScrollX = secMemberTop - currentScroll;
      const memberScrollTop = secMember.getBoundingClientRect().top;
      if (currentScroll > lastScroll2) {
        header.classList.add('hide')
      } else {
        header.classList.remove('hide')
      }
      articleVideo.style.transform = `translate3d(0, ${currentScroll}px, 0)`
      videoImgBox.style.transform = `translate3d(0, ${-currentScroll * 0.6}px, 0)`
      videoButtonBox.style.transform = `translate3d(0, ${-currentScroll* 0.65}px, 0)`

      //현재화면이 secMember - innerHeight*0.3 안에 있으면 marquee1이 transformX memberScrollX만큼 이동
      if (memberScrollTop < window.innerHeight) {
        marquee1.style.left = `${527 + memberScrollX}px`
        marquee2.style.right = `${582 + memberScrollX}px`
      }
      console.log(memberScrollX * 0.2)
      lastScroll2 = currentScroll;
    });
  }
}