import {TweenLite, TimelineLite, Sine} from 'gsap';
import SplitText from '~plugins/SplitText';
import '~plugins/DrawSVGPlugin';

window.onNuxtReady(() => {
  let tl = new TimelineLite();
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let timing = -0.000000053 * Math.pow(vw, 2) + 0.00037 * vw + 0.61;
  let spt = new SplitText('h1', {type: 'chars'});
  let chars = spt.chars;
  let tweenDefaults = {
    ease: Sine.easeOut,
    clearProps: 'all'
  };
  let tweenNavbar = {};
  let tweenNav = {};

  if (vw < 426) {
    Object.assign(tweenNavbar, {
      height: vh
    }, tweenDefaults);
    Object.assign(tweenNav, {
      fontSize: '4px',
      maxWidth: '160px',
      xPercent: '-74',
      x: (vw * 0.5),
      y: '5px'
    }, tweenDefaults);
  } else {
    Object.assign(tweenNavbar, {
      width: vw
    }, tweenDefaults);
    Object.assign(tweenNav, {
      fontSize: '4px',
      maxHeight: '160px',
      rotation: 90,
      yPercent: '-107',
      y: (vh * 0.5),
      x: '-35px'
    }, tweenDefaults);
  }

  TweenLite.set(chars, {
    transformPerspective: 600,
    perspective: 300,
    transformStyle: 'preserve-3d'
  });
  TweenLite.set('body', { visibility: 'visible' });
  TweenLite.set('#clipline', { visibility: 'hidden' });
  tl.add('draw', '+=0.4');
  tl.from('#letterm', 0.7, {drawSVG: 0}, 'draw')
    .from('#letterf', 0.4, {drawSVG: 0})
    .set('#clipline', { visibility: 'visible' })
    .from('#letterfcross', 0.15, {drawSVG: 0})
    .add('slidelogo', '+=0.3')
    .from('#logo svg', timing, {
      scale: 5,
      stroke: '#ffffff',
      transformOrigin: '50% 50%',
      xPercent: '-50',
      yPercent: '-50',
      x: (vw * 0.5),
      y: (vh * 0.5),
      ease: Sine.easeOut
    }, 'slidelogo')
    .add('opening', '-=0.3')
    .from('#navbar nav', 0.1, { opacity: 0 }, 'slidelogo')
    .from('#navbar', timing, tweenNavbar, 'slidelogo')
    .from('#navbar nav', timing, tweenNav, 'slidelogo')
    .from('#pageHead', 0.5, {
      yPercent: -100,
      ease: Sine.easeOut
    }, 'opening')
    .staggerFrom(chars, 0.35, {
      z: -100,
      rotationY: 180,
      opacity: 0.5,
      ease: Sine.easeOut
    }, 0.03, '-=0.2')
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
    }, 0.1, 'opening');
});
