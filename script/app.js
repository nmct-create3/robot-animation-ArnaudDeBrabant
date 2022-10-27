let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

tl.set('#Shadow', {
  transformOrigin: '50% 100%',
})
  .fromTo(
    '#Robot',
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    '#Shadow',
    {
      scale: 0.75,
    },
    '-=.75'
  );

// pause svg animation if pause button is clicked
document.querySelector('.js-pausebtn').addEventListener('click', () => {
    tl.pause();
});

// resume svg animation if resume button is clicked
document.querySelector('.js-playbtn').addEventListener('click', () => {
  tl.resume();
});

const btnFast = document.querySelector('.js-fast');
btnFast.onclick = () => tl.timeScale(2);

const btnSlow = document.querySelector('.js-slow');
btnSlow.onclick = () => tl.timeScale(0.5);

const btnNormal = document.querySelector('.js-normal');
btnNormal.onclick = () => tl.timeScale(1);
