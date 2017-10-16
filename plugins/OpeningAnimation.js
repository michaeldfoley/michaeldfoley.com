import {TweenLite, TimelineLite, Sine} from 'gsap';
import SplitText from '~plugins/SplitText';
import '~plugins/DrawSVGPlugin';

window.onNuxtReady((nuxt) => {
  let bg = document.createElement('div');
  document.body.appendChild(bg);
  let tl = new TimelineLite({onComplete: () => { bg.remove(); }});
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let navw = document.getElementById('navbar').clientWidth;
  let timing = -0.000000053 * Math.pow(vw, 2) + 0.00037 * vw + 0.61;
  let spt = new SplitText('h1', {type: 'chars'});
  let chars = spt.chars;
  let perspective = {
    transformPerspective: 600,
    perspective: 300,
    transformStyle: 'preserve-3d'
  };
  let tweenDefaults = {
    ease: Sine.easeOut,
    clearProps: 'all'
  };
  let tweenNavbar = {};
  let tweenNav = {};

  Object.assign(tweenNavbar, {
    display: 'block',
    width: vw
  }, tweenDefaults);
  Object.assign(tweenNav, {
    yPercent: -100,
    opacity: 0
  }, tweenDefaults);

  TweenLite.set(chars, perspective);
  TweenLite.set('.headline .btn', perspective);
  TweenLite.set('body', {visibility: 'visible'});
  TweenLite.set(bg, {
    backgroundImage: 'linear-gradient(120deg, #0B549F 30%, #7DD2CC 80%, #D2EAD6 100%)',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0
  });
  tl.set('#clipline', { visibility: 'hidden' })
    .set('#navbar, #trigger', { xPercent: '-100' })
    .from('#letterm', 0.7, {drawSVG: 0})
    .from('#letterf', 0.4, {drawSVG: 0})
    .set('#clipline', { visibility: 'visible' })
    .from('#letterfcross', 0.15, {drawSVG: 0})
    .add('slidelogo', '+=0.3')
    .from('#logo', timing, {
      scale: 5,
      transformOrigin: '50% 50%',
      xPercent: '-50',
      yPercent: '-50',
      x: (vw * 0.5) + navw,
      y: (vh * 0.5),
      ease: Sine.easeOut
    }, 'slidelogo')
    .to(bg, timing, {
      xPercent: '-100',
      ease: Sine.easeOut,
      onComplete: () => { nuxt.$store.commit('toggleTrigger', true); }
    }, 'slidelogo')
    .add('opening', '-=0.3')
    .add('headline', 'opening+=0.5')
    .from('#pageHead', 0.5, {
      yPercent: -100,
      ease: Sine.easeOut
    }, 'opening')
    .staggerFrom(chars, 0.35, {
      z: -100,
      rotationY: 180,
      opacity: 0.5,
      ease: Sine.easeOut
    }, 0.03, 'opening+=0.3')
    .staggerFrom('.meta-tags li', 0.35, {
      xPercent: -100,
      opacity: 0,
      ease: Sine.easeOut
    }, 0.08, 'headline')
    .from('.headline .btn', 0.35, {
      rotationY: 90,
      ease: Sine.easeOut,
      clearProps: 'all'
    }, 'headline')
    .staggerFrom('#pageImages img', 0.5, {
      opacity: 0,
      yPercent: -100,
      transformOrigin: '50% 50%',
      ease: Sine.easeOut
    }, '0.15', 'opening')
    .staggerFrom('#main > *', 0.5, {
      opacity: 0,
      yPercent: -100,
      transformOrigin: '50% 50%',
      ease: Sine.easeOut
    }, 0.1, 'opening')
    .from('.next-project a', 0.5, {
      opacity: 0,
      yPercent: 100
    }, '-=0.5');
});
