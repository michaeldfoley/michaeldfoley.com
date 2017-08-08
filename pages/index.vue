<template>
  <main class="container">
    <div>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </main>
</template>

<script>
/* global SplitText */
import Logo from '~/components/Logo.vue';
import {TimelineMax, TweenMax, Sine} from 'gsap';

export default {
  components: {
    Logo
  },
  head: {
    title: 'Work'
  },
  transition: {
    mode: 'out-in',
    css: false,
    mount: () => {
      console.log('index mounted');
    },
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
      console.log('leave');
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
.title
{
  display: block;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
.logo {
  stroke: #111111;
  height: 100%;
  width: 100%;
}
</style>
