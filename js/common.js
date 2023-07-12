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
          <a href="./about-stack.html" class="link small">About Stake and Stack</a>
          <a href="./about-webew.html" class="link small">About webew</a>
        </li>
        <li class="link-item">
          <p class="link">Networks</p>
          <a href="./tezos.html" class="link small">+Tezos (XTZ)</a>
          <a href="./kava.html" class="link small">+Kava (KAVA)</a>
          <a href="./akt.html" class="link small">+Akash Network (AKT)</a>
          <a href="./sol.html" class="link small">+Solana (SOL)</a>
        </li>
        <!-- <li class="link-item"><a href="" class="link">Products</a></li>
        <li class="link-item"><a href="" class="link">Membership</a></li> -->
        <li class="link-item"><a href="./news-list.html" class="link">News & Blog</a></li>
        <li class="link-item"><a href="./faq.html" class="link">FAQ</a></li>
      </ul>
      <div class="menu-footer">
        <div class="box-btn">
          <div class="btn">
            <div class="dropdown">
              <button class="language btn-dropdown">
                <img src="./assets/images/icon/flag-usd.svg" alt="">
              </button>
              <div class="wrap-language">
                <a href="" class="language">
                  <img src="./assets/images/icon/flag-usd.svg" alt="">
                  English
                </a>
                <a href="./kr/index.html" class="language">
                  <img src="./assets/images/icon/flag-kr.svg" alt="">
                  Korean
                </a>
              </div>
            </div>
            <div class="dropdown">
              <button class="language btn-dropdown">
                USD
              </button>
              <div class="wrap-language">
                <button class="language">
                  <img src="./assets/images/icon/dollar.svg" alt="">
                  US Dollar
                </button>
                <button class="language">
                  <img src="./assets/images/icon/won.svg" alt="">
                  KR Won
                </button>
              </div>
            </div>
          </div>
        </div>
        <a href="./dashboard.html" class="btn-yellow btn-dashboard">
          DASHBOARD
        </a>
      </div>
    </div>
  </div>
</header>

<header class="pc header">
  <a href="/" class="link-home"><img src="./assets/images/icon/logo.svg" alt="logo" class="logo"></a>
  <nav>
    <button class="link btn-about">
      About
      <div class="box-sublink">
        <a href="./about-stack.html" class="link">+About Stake and Stack</a>
        <a href="./about-webew.html" class="link">+About webew</a>
      </div>
    </button>
    <button class="link btn-about">
      Networks
      <div class="box-sublink">
        <a href="./tezos.html" class="link">+Tezos (XTZ)</a>
        <a href="./kava.html" class="link">+Kava (KAVA)</a>
        <a href="./akt.html" class="link">+Akash Network (AKT)</a>
        <a href="./sol.html" class="link">+Solana (SOL)</a>
      </div>
    </button>
    <!-- <a href="" class="link">Products</a>
    <a href="" class="link">Membership</a> -->
    <a href="./news-list.html" class="link">News & Blog</a>
    <a href="./faq.html" class="link">FAQ</a>
  </nav>

  <!-- TODO: 로그인 전, 후 분기처리 -->
  <div class="box-btn">
    <!-- <a href="./login.html" class="btn before-login">LOGIN</a> -->
    <!-- <a href="" class="btn after-login">LOGOUT</a>
    <a href="" class="btn after-login">MYPAGE</a> -->
    <div class="btn gap">
      <div class="dropdown">
        <button class="language btn-dropdown">
          <img src="./assets/images/icon/flag-usd.svg" alt="">
        </button>
        <div class="wrap-language">
          <a href="" class="language">
            <img src="./assets/images/icon/flag-usd.svg" alt="">
            English
          </a>
          <a href="./kr/index.html" class="language">
            <img src="./assets/images/icon/flag-kr.svg" alt="">
            Korean
          </a>
        </div>
      </div>
      <div class="dropdown">
        <button class="language btn-dropdown">
          USD
        </button>
        <div class="wrap-language">
          <button class="language">
            <img src="./assets/images/icon/dollar.svg" alt="">
            US Dollar
          </button>
          <button class="language">
            <img src="./assets/images/icon/won.svg" alt="">
            KR Won
          </button>
        </div>
      </div>
    </div>
    <a href="./dashboard.html" class="btn btn-yellow">DASHBOARD</a>
  </div>
</header>
`)
//body 의 마지막 자식으로 header 추가
const main = document.querySelector('main');

main.insertAdjacentHTML('beforeend', `
<div class="toast-box"></div>
<footer data-scroll>
  <div class="wrap">
    <div class="top">
      <div class="box-link">
        <div class="box">
          <h3 class="title">About</h3>
          <a href="./about-stack.html" class="link">About Stake and Stack</a>
          <a href="./about-webew.html" class="link">About webew</a>
          <a href="./news-list.html" class="link">News & Blog</a>
          <a href="./faq.html" class="link">FAQ</a>
        </div>
        <div class="box">
          <h3 class="title">Networks</h3>
          <a href="./tezos.html" class="link">Tezos (XTZ)</a>
          <a href="./kava.html" class="link">Kava (KAVA)</a>
          <a href="./akt.html" class="link">Akash Network (AKT)</a>
          <a href="./sol.html" class="link">Solana (SOL)</a>
        </div>
        <div class="box">
          <h3 class="title">Products</h3>
          <a href="" class="link">Dashboard</a>
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
            <a href="" class="link-icon" target="_blank"><img src="./assets/images/icon/twitter.svg" alt=""></a>
            <a href="https://www.threads.net/@stakeandstack" class="link-icon" target="_blank"><img src="./assets/images/icon/threads.svg" alt=""></a>
            <a href="" class="link-icon" target="_blank"><img src="./assets/images/icon/telegram.svg" alt=""></a>
            <a href="" class="link-icon" target="_blank"><img src="./assets/images/icon/kakao-talk.svg" alt=""></a>
            <!-- <a href="" class="link-icon"><img src="./assets/images/icon/discord.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/instagram.svg" alt=""></a>
            <a href="" class="link-icon"><img src="./assets/images/icon/facebook.svg" alt=""></a> -->
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
    <img src="./assets/images/gif/cat-b.gif" alt="" class="cat">
  </div>
</footer>`)
const header = document.querySelector('header.pc');
const btnAbout = document.querySelectorAll('.btn-about');
const boxSublink = document.querySelectorAll('.box-sublink');
const btnDropdown = document.querySelectorAll('.btn-dropdown');
const dropdown = document.querySelectorAll('.dropdown');
const sections = document.querySelectorAll('section');
const accordion = document.querySelectorAll('.accordion');
const btnMenu = document.querySelector('.btn-menu');
const toggle = document.querySelectorAll('.toggle');
const selectBox = document.querySelectorAll('.box-select');
const headerMo = document.querySelector('header.mo');
const btnTab = document.querySelectorAll('.btn-tab');
const tabContent = document.querySelectorAll('.tab-content');
const menu = document.querySelector('.header.mo .menu');

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

btnDropdown.forEach((e, i) => {
  e.addEventListener('click', () => {
    dropdown.forEach((el, idx) => {
      if(idx !== i){
        el.classList.remove('active')
      }
    })
    dropdown[i].classList.toggle('active')
  })
})

document.addEventListener('click', (e) => {
  dropdown.forEach((a, i) => {
    if (!a.contains(e.target) && !btnDropdown[i].contains(e.target)) {
      dropdown[i].classList.remove('active')
    }
  })
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
    //accordion안에 자식 요소 answer 클릭안되게 stopPropagation
    e.querySelector('.answer').addEventListener('click', (e) => {
      e.stopPropagation()
    })

  })
})

btnMenu.addEventListener('click', () => {
  headerMo.classList.toggle('active')
  if(headerMo.classList.contains('active')){
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
  }else{
    document.body.style.overflow = 'auto'
    document.body.style.height = 'auto'
  }

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

//btnTab의 data-tab-target 속성과 tabPanel의 data-tab-name가 같으면 active 클래스 추가
btnTab.forEach(e => {
  e.addEventListener('click', () => {
    btnTab.forEach(el => {
      el.classList.remove('active')
    })
    tabContent.forEach(el => {
      el.classList.remove('active')
    })
    const tabName = e.getAttribute('data-tab-target');
    const tab = document.querySelector(`[data-tab-name="${tabName}"]`);
    e.classList.add('active')
    tab.classList.add('active')
  })
})

//토스트

const btnToast = document.querySelectorAll('.btn-toast');
const toastBox = document.querySelector('.toast-box');

btnToast.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const toastType = e.target.dataset.toastType;
    createToast(toastType)
  });
});

//create toast
const createToast = (type) => {
  const toast = document.createElement('div');
  let toastText = '';
  if (type === 'success') {
    toastText = '성공했습니다.';
  } else if (type === 'warning') {
    toastText = '경고했습니다.';
  } else if (type === 'error') {
    toastText = '에러났습니다.';
  } else if (type === 'info') {
    toastText = '알려드립니다.';
  }

  toast.classList.add('toast');
  toast.classList.add(`toast-${type}`);
  toast.innerHTML = `
        <img src="./assets/images/icon/toast-${type}.svg" alt="icon" class="icon">
        <span class="toast-text">${toastText}</span>
      `;
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('active');
  }, 100);
  setTimeout(() => {
    // 토스트에 remove 클래스를 추가하고 삭제
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 1000);
  }, 2000);
};

menu.style.height = `${window.innerHeight}px`
//화면이 리사이즈 될때마다 메뉴에 innerHeight값을 넣어줌
window.addEventListener('resize', () => {
  menu.style.height = `${window.innerHeight}px`
})