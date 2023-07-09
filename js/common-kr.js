//body 의 첫번째 자식으로 header 추가
document.body.insertAdjacentHTML('afterbegin', `
<header class="header mo">
  <a href="/"><img src="../assets/images/icon/logo.svg" alt="logo" class="logo"></a>
  <div class="btn-menu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <div class="menu">
    <div class="menu-container">
      <ul class="link-list">
        <li class="link-item">
          <p class="link">소개</p>
          <a href="./about-stack.html" class="link small">스테이크 앤 스택</a>
          <a href="./about-webew.html" class="link small">위뷰</a>
        </li>
        <li class="link-item">
          <p class="link">네트워크</p>
          <a href="./tezos.html" class="link small">+테조스 (XTZ)</a>
          <a href="./kava.html" class="link small">+카바 (KAVA)</a>
          <a href="./akt.html" class="link small">+아카시 네트워크 (AKT)</a>
          <a href="./sol.html" class="link small">+솔라나 (SOL)</a>
        </li>
        <!-- <li class="link-item"><a href="" class="link">Products</a></li>
        <li class="link-item"><a href="" class="link">Membership</a></li> -->
        <li class="link-item"><a href="./news-list.html" class="link">뉴스 & 블로그</a></li>
        <li class="link-item"><a href="./faq.html" class="link">자주묻는질문</a></li>
      </ul>
      <div class="menu-footer">
        <div class="box-btn">
          <div class="btn dropdown">
            <button class="language btn-dropdown">
              <img src="../assets/images/icon/flag-kr.svg" alt="">
              한국어
            </button>
            <div class="wrap-language">
              <a href="/" class="language">
                <img src="../assets/images/icon/flag-usd.svg" alt="">
                English
              </a>
              <a href="./kr/index.html" class="language">
                <img src="../assets/images/icon/flag-kr.svg" alt="">
                한국어
              </a>
            </div>
          </div>
          <div class="btn dropdown">
            <button class="language btn-dropdown">
              <img src="../assets/images/icon/dollar.svg" alt="">
              USD
            </button>
            <div class="wrap-language">
              <button class="language">
                <img src="../assets/images/icon/dollar.svg" alt="">
                US Dollar
              </button>
              <button class="language">
                <img src="../assets/images/icon/won.svg" alt="">
                KR Won
              </button>
            </div>
          </div>
        </div>
        <a href="./dashboard.html" class="btn-yellow btn-dashboard">
          대시보드
        </a>
      </div>
    </div>
  </div>
</header>

<header class="pc header">
  <a href="/" class="link-home"><img src="../assets/images/icon/logo.svg" alt="logo" class="logo"></a>
  <nav>
    <button class="link btn-about">
      소개
      <div class="box-sublink">
        <a href="./about-stack.html" class="link">스테이크 앤 스택</a>
        <a href="./about-webew.html" class="link">위뷰</a>
      </div>
    </button>
    <button class="link btn-about">
      네트워크
      <div class="box-sublink">
        <a href="./tezos.html" class="link">+테조스 (XTZ)</a>
        <a href="./kava.html" class="link">+카바 (KAVA)</a>
        <a href="./akt.html" class="link">+아카시 네트워크 (AKT)</a>
        <a href="./sol.html" class="link">+솔라나 (SOL)</a>
      </div>
    </button>
    <!-- <a href="" class="link">Products</a>
    <a href="" class="link">Membership</a> -->
    <a href="./news-list.html" class="link">뉴스 & 블로그</a>
    <a href="./faq.html" class="link">자주묻는질문</a>
  </nav>

  <!-- TODO: 로그인 전, 후 분기처리 -->
  <div class="box-btn">
    <!-- <a href="./login.html" class="btn before-login">LOGIN</a> -->
    <!-- <a href="" class="btn after-login">LOGOUT</a>
    <a href="" class="btn after-login">MYPAGE</a> -->
    <div class="btn dropdown">
      <button class="language btn-dropdown">
        <img src="../assets/images/icon/flag-kr.svg" alt="">
        한국어
      </button>
      <div class="wrap-language">
        <a href="/" class="language">
          <img src="../assets/images/icon/flag-usd.svg" alt="">
          English
        </a>
        <a href="./kr/index.html" class="language">
          <img src="../assets/images/icon/flag-kr.svg" alt="">
          한국어
        </a>
      </div>
    </div>
    <div class="btn dropdown">
      <button class="language btn-dropdown">
        <img src="../assets/images/icon/dollar.svg" alt="">
        USD
      </button>
      <div class="wrap-language">
        <button class="language">
          <img src="../assets/images/icon/dollar.svg" alt="">
          US Dollar
        </button>
        <button class="language">
          <img src="../assets/images/icon/won.svg" alt="">
          KR Won
        </button>
      </div>
    </div>
    <a href="./dashboard.html" class="btn btn-yellow">대시보드</a>
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
          <h3 class="title">소개</h3>
          <a href="./about-stack.html" class="link">스테이크 앤 스택</a>
          <a href="./about-webew.html" class="link">위뷰</a>
          <a href="./news-list.html" class="link">뉴스 & 블로그</a>
          <a href="./faq.html" class="link">자주묻는질문</a>
        </div>
        <div class="box">
          <h3 class="title">네트워크</h3>
          <a href="./tezos.html" class="link">테조스 (XTZ)</a>
          <a href="./kava.html" class="link">카바 (KAVA)</a>
          <a href="./akt.html" class="link">아카시 네트워크 (AKT)</a>
          <a href="./sol.html" class="link">솔라나 (SOL)</a>
        </div>
        <div class="box">
          <h3 class="title">제품</h3>
          <a href="" class="link">대시보드</a>
        </div>
      </div>
      <div class="divider-vertical"></div>
      <div class="divider-horizontal"></div>
      <div class="box-icon">
        <div class="box">
          <h3 class="title">우리를 찾아보세요</h3>
          <div class="d-flex">
            <a href="" class="link-icon"><img src="../assets/images/icon/mail.svg" alt=""></a>
            <a href="" class="link-icon"><img src="../assets/images/icon/linktree.svg" alt=""></a>
            <a href="" class="link-icon"><img src="../assets/images/icon/notion.svg" alt=""></a>
            <a href="" class="link-icon"><img src="../assets/images/icon/medium.svg" alt=""></a>
          </div>
        </div>
        <div class="box">
          <h3 class="title">커뮤니티에 가입하세요</h3>
          <div class="d-flex">
            <a href="" class="link-icon" target="_blank"><img src="../assets/images/icon/twitter.svg" alt=""></a>
            <a href="https://www.threads.net/@stakeandstack" class="link-icon" target="_blank"><img src="../assets/images/icon/threads.svg" alt=""></a>
            <a href="" class="link-icon" target="_blank"><img src="../assets/images/icon/telegram.svg" alt=""></a>
            <a href="" class="link-icon" target="_blank"><img src="../assets/images/icon/kakao-talk.svg" alt=""></a>
            <!-- <a href="" class="link-icon"><img src="../assets/images/icon/discord.svg" alt=""></a>
            <a href="" class="link-icon"><img src="../assets/images/icon/instagram.svg" alt=""></a>
            <a href="" class="link-icon"><img src="../assets/images/icon/facebook.svg" alt=""></a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <img src="../assets/images/icon/webew.png" alt="" class="webew">
      <div class="d-flex">
        <p class="copyright">Ⓒ 2023 Stake and Stack</p>
        <a href="" class="privacy">개인정보보호 & 이용약관</a>
      </div>
    </div>
    <img src="../assets/images/gif/cat-b.gif" alt="" class="cat">
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
    tabContent.forEach(el => {
      el.classList.remove('active')
    })
    const tabName = e.getAttribute('data-tab-target');
    const tab = document.querySelector(`[data-tab-name="${tabName}"]`);
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