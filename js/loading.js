const loadingTitle = document.querySelector('.loading-title');
let count = 0;
let timer = setInterval(() => {
  count++;
  if (count > 3) {
    count = 0;
    loadingTitle.innerHTML = 'LOADING';
  } else {
    loadingTitle.innerHTML += '.';
  }
}, 500);