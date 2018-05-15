/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "SplitText" }] */

import {TimelineLite, Sine} from 'gsap';
import '~/plugins/DrawSVGPlugin';
import SplitText from '~/plugins/SplitText';

window.onNuxtReady(({$store, _route}) => {
  let tl = new TimelineLite({
    onComplete: () => {
      if (_route.name !== 'index') {
        $store.commit('toggleTrigger', true);
      }
    }
  });
  let bg = document.getElementById('animateOpening');
  let vw = window.innerWidth;
  let timing = -0.000000053 * Math.pow(vw, 2) + 0.00037 * vw + 0.61;
  tl.set('#logo', {zIndex: 10001})
    .set('#clipline', {visibility: 'hidden'})
    .from('#letterm', 0.7, {drawSVG: 0})
    .from('#letterf', 0.4, {drawSVG: 0})
    .set('#clipline', {visibility: 'visible'})
    .from('#letterfcross', 0.15, {drawSVG: 0})
    .add('slidelogo', '+=0.3');

  if (bg) {
    tl.from('#logo', timing, {
      scale: 5,
      transformOrigin: '50% 50%',
      left: '50%',
      top: '50%',
      xPercent: '-50',
      yPercent: '-50',
      ease: Sine.easeOut,
      clearProps: 'all'
    }, 'slidelogo')
      .to(bg, timing, {
        xPercent: '-100',
        ease: Sine.easeOut,
        onStart: () => $store.commit('toggleOpening', false),
        onComplete: () => bg.remove()
      }, 'slidelogo')
      .from('#logo', 0.3, {
        stroke: '#ffffff'
      }, '-=0.3');
  } else {
    tl.set('#logo', {
      onComplete: () => {
        $store.commit('toggleOpening', false);
      }
    }, 'slidelogo');
  }
});
