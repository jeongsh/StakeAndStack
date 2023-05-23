//body 의 첫번째 자식으로 header 추가
document.body.insertAdjacentHTML('afterbegin', `
<header class="header mo">
  <a href="/"><img src="./assets/images/icon/logo.svg" alt="logo" class="logo"></a>
  <div class="btn-menu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="menu">
    <div class="menu-container">
      <ul class="link-list">
        <li class="link-item">
          <p class="link">About</p>
          <a href="./about-stack.html" class="link small">+ About Stake and Stack</a>
          <a href="./about-webew.html" class="link small">+ About webew</a>
        </li>
        <li class="link-item">
          <p class="link">Networks</p>
          <a href="./tezos.html" class="link small">+Tezos</a>
          <a href="./kava.html" class="link small">+KAVA</a>
          <a href="./akt.html" class="link small">+AKT</a>
        </li>
        <li class="link-item"><a href="" class="link">Products</a></li>
        <li class="link-item"><a href="" class="link">Membership</a></li>
        <li class="link-item"><a href="" class="link">News&Blog</a></li>
        <li class="link-item"><a href="" class="link thin">LOGIN</a></li>
        <li class="link-item"><a href="" class="link thin yellow">DASHBOARD</a></li>
        <li class="link-item"><a href="" class="link thin">News&Blog</a></li>
        <li class="link-item">
          <a href="" class="link thin">
            <img src="./assets/images/icon/flag-usd.svg" alt="">
          </a>
          <a href="" class="link thin">
            <img src="./assets/images/icon/flag-usd.svg" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</header>

<header class="pc header">
  <a href="/"><img src="./assets/images/icon/logo-vertical.svg" alt="logo" class="logo"></a>
  <nav>
    <button class="link btn-about">
      About
      <div class="box-sublink">
        <a href="./about-stack.html" class="link">+About Stake and Stack</a>
        <a href="./about-webew.html" class="link">+About webew</a>
      </div>
    </button>
    <button class="link btn-about">
      NetWorks
      <div class="box-sublink">
        <a href="./tezos.html" class="link">+Tezos</a>
        <a href="./kava.html" class="link">+KAVA</a>
        <a href="./akt.html" class="link">+AKT</a>
      </div>
    </button>
    <a href="" class="link">Products</a>
    <a href="" class="link">Membership</a>
    <a href="" class="link">News&Blog</a>
  </nav>

  <!-- TODO: 로그인 전, 후 분기처리 -->
  <div class="box-btn">
    <!-- <a href="./login.html" class="btn before-login">LOGIN</a> -->
    <a href="" class="btn after-login">LOGOUT</a>
    <a href="" class="btn after-login">MYPAGE</a>
    <button class="btn btn-language">
      <div class="language">
        <img src="./assets/images/icon/flag-usd.svg" alt="">
        USD
        <img src="./assets/images/icon/down.svg" alt="" class="icon">
      </div>
      <div class="wrap-language">
        <div class="language">
          <img src="./assets/images/icon/flag-usd.svg" alt="">
          USD
        </div>
        <div class="language">
          <img src="./assets/images/icon/flag-usd.svg" alt="">
          KWD
        </div>
      </div>
    </button>
    <a href="./dashboard.html" class="btn btn-yellow">DASHBOARD</a>
  </div>
</header>
`)
//body 의 마지막 자식으로 header 추가
const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', `
<footer data-scroll>
  <div class="wrap">
    <div class="top">
      <div class="box-link">
        <div class="box">
          <h3 class="title">About</h3>
          <a href="" class="link">About Stake and Stack</a>
          <a href="" class="link">About webew</a>
        </div>
        <div class="box">
          <h3 class="title">networks</h3>
          <a href="" class="link">Tezos (XTZ)</a>
          <a href="" class="link">Kava (KAVA)</a>
          <a href="" class="link">Akash Network (AKT)</a>
        </div>
        <div class="box">
          <h3 class="title">products</h3>
          <a href="" class="link">Dashboard</a>
          <a href="" class="link">Rewards Calculator</a>
          <a href="" class="link">SaS Club (Membership)</a>
        </div>
      </div>
      <div class="divider-vertical"></div>
      <div class="divider-horizontal"></div>
      <div class="box-icon">
        <div class="box">
          <h3 class="title">Find us on</h3>
          <div class="d-flex">
            <a href="" class="link-icon"><img src="./assets/images/icon/mail.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/linktree.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/notion.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/medium.svg" alt=""></a>
          </div>
        </div>
        <div class="box">
          <h3 class="title">Join our community</h3>
          <div class="d-flex">
            <a href="" class="link-icon"><img src="./assets/images/icon/twitter.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/telegram.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/kakao-talk.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/discord.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/instagram.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/facebook.svg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <img src="./assets/images/icon/webew.png" alt="" class="webew">
      <div class="d-flex">
        <p class="copyright">Ⓒ 2023 Stake and Stack</p>
        <a href="" class="privacy">Privacy & Terms</a>
      </div>
    </div>
    <img src="./assets/images/main/footer-cat.svg" alt="" class="cat">
  </div>
</footer>`)
const header = document.querySelector('header.pc');
const btnAbout = document.querySelectorAll('.btn-about');
const boxSublink = document.querySelectorAll('.box-sublink');
const btnLanguage = document.querySelector('.btn-language');
const sections = document.querySelectorAll('section');
const accordion = document.querySelectorAll('.accordion');
const btnMenu = document.querySelector('.btn-menu');
const toggle = document.querySelectorAll('.toggle');
const selectBox = document.querySelectorAll('.box-select');
const headerMo = document.querySelector('header.mo');

btnAbout.forEach((e, i) => {
  e.addEventListener('click', () => {
    btnAbout.forEach(e => {
      e.classList.remove('active')
    })
    e.classList.toggle('active')
  })
})

//boxSublink 바깥 클릭시 active 클래스 제거
document.addEventListener('click', (e) => {
  boxSublink.forEach((a, i) => {
    if (!a.contains(e.target) && !btnAbout[i].contains(e.target)) {
      btnAbout[i].classList.remove('active')
    }
  })
})

btnLanguage.addEventListener('click', () => {
  btnLanguage.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  //스크롤시 섹션에 active 클래스 추가
  sections.forEach(e => {
    if (e.getBoundingClientRect().top <= 300) {
      e.classList.add('active')
    } else {
      e.classList.remove('active')
    }
  });
})

accordion.forEach((e, i) => {
  e.addEventListener('click', () => {
    e.classList.toggle('active')
  })
})

btnMenu.addEventListener('click', () => {
  headerMo.classList.toggle('active')
})

toggle.forEach(e => {
  e.addEventListener('click', () => {
    e.classList.toggle('active')
  })
})

const range = document.querySelectorAll('.range');
range.forEach(e => {
  //e의 min, max, value 속성을 가져옴
  const min = e.getAttribute('min');
  const max = e.getAttribute('max');

  //e의 value 속성이 없으면 min값으로 설정
  if (!e.getAttribute('value')) {
    e.setAttribute('value', min)
  }

  e.addEventListener('input', () => {
    //e의 현재 값을 가져옴
    const value = e.value;
    const percent = (value - min) / (max - min) * 100;
    //value가 0이면 0%로, 100이면 100%로
    e.style.background = `linear-gradient(to right, #797BED 0%, #797BED ${percent}%, transparent ${percent}%, transparent 100%)`
  })
})


// 스크롤 다운 시 header에 hide 클래스 추가 스크롤 업 시 hide 클래스 제거
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  //지금 높이가 맨위이면 noscroll 클래스 추가

  if (currentScroll <= 0) {
    header.classList.remove('hide')
    return
  }
  if (currentScroll > lastScroll && !header.classList.contains('hide')) {
    header.classList.add('hide')
  } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
    header.classList.remove('hide')
  }
  lastScroll = currentScroll;
})

//커스텀 select 태그
selectBox.forEach(e => {
  e.addEventListener('click', () => {
    //selectBox의 active 클래스 제거
    selectBox.forEach(el => {
      el.classList.remove('active')
    })
    e.classList.add('active')
  })
  e.querySelectorAll('.option').forEach(a => {
    a.addEventListener('click', (event) => {
      event.stopPropagation();
      e.querySelector('input').value = a.innerHTML;
      e.classList.remove('active')
    })
  })
})