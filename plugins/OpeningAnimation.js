import {TweenLite, TimelineLite, Sine} from 'gsap';
import SplitText from '~plugins/SplitText';
import '~plugins/DrawSVGPlugin';

window.onNuxtReady(() => {
  let tl = new TimelineLite();
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  let spt = new SplitText('h1', {type: 'chars'});
  let chars = spt.chars;
  TweenLite.set(chars, {
    transformPerspective: 600,
    perspective: 300,
    transformStyle: 'preserve-3d'
  });
  TweenLite.set('#logo, #navbar, #pageHead, #main', { visibility: 'visible' });
  TweenLite.set('#clipline', { visibility: 'hidden' });
  tl.add('draw', '+=0.4');
  tl.from('#letterm', 0.7, {drawSVG: 0}, 'draw')
    .from('#letterf', 0.4, {drawSVG: 0})
    .set('#clipline', { visibility: 'visible' })
    .from('#letterfcross', 0.15, {drawSVG: 0});
  tl.add('slidelogo', '+=0.3');
  tl.from('#logo svg', 0.8, {
    scale: 5,
    stroke: '#ffffff',
    transformOrigin: '50% 50%',
    xPercent: '-50',
    yPercent: '-50',
    x: (vw * 0.5),
    y: (vh * 0.5),
    ease: Sine.easeOut
  }, 'slidelogo');
  tl.from('body', 0.8, { backgroundImage: 'linear-gradient(-45deg, #1d7477, #49a7a3)' }, 'slidelogo');
  tl.add('opening', '-=0.3');
  if (vw < 426) {
    tl.from('#navbar', 0.3, {
      yPercent: 100,
      ease: Sine.easeOut
    }, 'opening');
  } else {
    tl.from('#navbar', 0.3, {
      xPercent: -100,
      ease: Sine.easeOut
    }, 'opening')
      .from('#navbar nav', 0.3, {
        yPercent: -50,
        ease: Sine.easeOut
      }, 'opening');
  }
  tl.from('#pageHead', 0.5, {
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
