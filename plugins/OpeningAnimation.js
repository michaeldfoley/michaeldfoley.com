/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "SplitText" }] */

import {TimelineLite, Sine} from 'gsap';
import '~/plugins/DrawSVGPlugin';
import SplitText from '~/plugins/SplitText';

window.onNuxtReady(({$store}) => {
  let tl = new TimelineLite({
    onComplete: () => {
      $store.commit('toggleTrigger', true);
      $store.commit('toggleOpening', true);
    }
  });
  let spt = new SplitText('h1', {type: 'chars'});
  let chars = spt.chars;
  tl.add('start')
    .set('body', {
      width: '100vw',
      overflow: 'hidden'
    })
    .set('aside li', {
      transformPerspective: 600,
      perspective: 300,
      transformStyle: 'preserve-3d'
    })
    .set('aside', {
      boxSizing: 'border-box',
      position: 'fixed',
      visibility: 'visible',
      width: '100%',
      zIndex: 10001
    })
    .set('#clipline', {visibility: 'hidden'})
    .from('#letterm', 0.7, {drawSVG: 0}, 'start+=0.1')
    .add('afterm')
    .from('#letterf', 0.4, {drawSVG: 0})
    .set('#clipline', {visibility: 'visible'})
    .from('#letterfcross', 0.15, {drawSVG: 0})
    .staggerFrom(chars, 0.2, {
      opacity: 0,
      xPercent: -100,
      ease: Sine.easeOut
    }, '0.03', 'afterm-=0.2')
    .staggerFrom('aside li', 0.4, {
      opacity: 0,
      scale: 0.7,
      rotation: -40,
      rotationX: 65,
      z: -100,
      ease: Sine.easeOut
    }, '0.1', 'afterm')
    .to('aside', 0.4, {
      yPercent: -100,
      ease: Sine.easeOut
    }, '+=0.6')
    .set('body', {
      clearProps: 'all'
    });
});
