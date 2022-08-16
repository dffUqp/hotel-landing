function onModile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    ) &&
    window.innerWidth < 768
  ) {
    const [burger, menu] = [
      document.querySelector('.burger'),
      document.querySelector('.list'),
    ];

    burger.onclick = () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');

      document.querySelector('body').classList.toggle('active');
    };
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('footer__btn') && window.innerWidth < 500) {
    const spoiler = e.target.closest('.footer__text');
    spoiler.classList.toggle('active');
  }
});

onModile();
window.addEventListener('resize', onModile);
