const body = document.querySelector('.body');
const btnBanner = document.querySelector('#btnBanner');
const banner = document.querySelector('.banner');
const secBlockchains = document.querySelector('.sec-blockchains');
const secMembership = document.querySelector('.sec-membership');
const textAdditional = document.querySelector('#textAdditional');
const headerMo = document.querySelector('header.mo');

let lastScrollTop = 0
let blcokPositionX = 0
let memberPositionX = 0

btnBanner.addEventListener('click', () => {
  banner.classList.add('close')
  body.classList.add('hide-banner')
})

window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDirection = st > lastScrollTop ? 'down' : 'up';
  blcokPositionX = scrollHorizontal(secBlockchains, 50, blcokPositionX, scrollDirection, lastScrollTop)
  memberPositionX = scrollHorizontal(secMembership, 50, memberPositionX, scrollDirection, lastScrollTop)
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
})

//세로스크롤 막고 가로 스크롤, 가로스크롤 끝나면 다시 세로스크롤
const scrollHorizontal = (e, max, positionX, scrollDirection, lastScrollTop) => {
  const cardWrap = e.querySelector('.card-wrap');
  if (e.getBoundingClientRect().top <= 0) {
    e.classList.add('fixed')
    if (e.getBoundingClientRect().bottom >= window.innerHeight) {
      if (scrollDirection === 'down') {
        positionX -= 0.8
        if (positionX < -max) {
          positionX = -max
        }
      } else {
        positionX += 0.8
        if (positionX > 0) {
          positionX = 0
        }
      }
    }
    cardWrap.style.transform = `translateX(${positionX}%)`
    if (e.getBoundingClientRect().bottom < window.innerHeight) {
      e.classList.add('fixend')
      cardWrap.style.transform = `translateX(-${max}%)`
      positionX = -max
    } else {
      e.classList.remove('fixend')
    }
  } else {
    e.classList.remove('fixed')
    cardWrap.style.transform = `translateX(0%)`
    positionX = 0
  }
  return positionX
}

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
