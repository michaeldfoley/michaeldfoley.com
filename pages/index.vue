<template>
  <main class="container">
    <div>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <div class="links">
        <nuxt-link to="/working/emails">Email Templates</nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
/* global SplitText */
import {TimelineMax, TweenMax, Sine} from 'gsap';

export default {
  layout: 'page',
  head: {
    title: 'Work'
  },
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      let tl = new TimelineMax({ onComplete: done });
      let spt = new SplitText('h1', { type: 'chars' });
      let chars = spt.chars;
      TweenMax.set(chars, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      });
      tl.add('start');
      tl.from(el, 0.8, {
        scale: 0.9,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 'start');
      tl.staggerFrom(chars, 0.8, {
        z: -100,
        rotationY: 180,
        opacity: 0.5,
        ease: Sine.easeOut
      }, 0.03, 'start');
    },
    leave (el, done) {
      let tl = new TimelineMax({ onComplete: done });
      TweenMax.set('h1', {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      });
      tl.add('leave');
      tl.to(el, 0.8, {
        scale: 0.9,
        opacity: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeIn
      }, 'leave');
      tl.to('h1', 0.75, {
        opacity: 0,
        z: -100,
        rotationY: 180,
        scale: 0.5,
        transformOrigin: '50% 50%',
        ease: Sine.easeIn
      }, 'leave');
      tl.timeScale(1.5);
    }
  }
};
</script>

<style>
</style>
