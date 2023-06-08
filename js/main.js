const body = document.querySelector('.body');
const btnBanner = document.querySelector('#btnBanner');
const banner = document.querySelector('.banner');
const textAdditional = document.querySelector('#textAdditional');


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
    slidesPerView: 1,
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 25,
    breakpoints: {
      500: {
        slidesPerView: '2',
      }
    }
  })

  const swiper2 = new Swiper('.swiper-membership', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 25,
    breakpoints: {
      500: {
        slidesPerView: '2',
      }
    }
  })

  const swiperCoin = new Swiper('.swiper-coin', {
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
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
      tablet: {
        smooth: true
      },
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
      if(window.innerWidth > 1280){
        articleVideo.style.transform = `translate3d(0, ${currentScroll}px, 0)`
      }
      // videoImgBox.style.transform = `translate3d(0, ${-currentScroll * 0.6}px, 0)`
      // videoButtonBox.style.transform = `translate3d(0, ${-currentScroll* 0.65}px, 0)`

      //현재화면이 secMember - innerHeight*0.3 안에 있으면 marquee1이 transformX memberScrollX만큼 이동
      if (memberScrollTop < window.innerHeight) {
        marquee1.style.left = `${527 + memberScrollX}px`
        marquee2.style.right = `${582 + memberScrollX}px`
      }
      lastScroll2 = currentScroll;
    });
  }
}

//클릭시 맨위로
const btnTop = document.querySelector('.btn-top');
btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

//클릭시 맨아래로
const btnBottom = document.querySelector('.btn-bottom');
btnBottom.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
})