<template>
  <aside class="container">
    <section>
      <h1>Michael Foley</h1>
      <ul>
        <li><span>Frontend</span></li>
        <li><span>Email</span></li>
        <li><span>Wordpress</span></li>
      </ul>
    </section>
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.4 70" class="logo" role="presentation" preserveAspectRatio="xMaxYMax" focusable="false">
      <title id="title">MF Logo</title>
      <use xlink:href="#mfLogo" />
    </svg>
  </aside>
</template>

<script>
  /* globals SplitText */
  import {TimelineLite, Sine} from 'gsap';
  if (process.browser) {
    require('~/plugins/SplitText');
    require('~/plugins/DrawSVGPlugin');
  }
  export default {
    mounted () {
      let tl = new TimelineLite({
        onComplete: () => {
          this.$store.commit('toggleTrigger', true);
        }
      });
      let spt = new SplitText('h1', {type: 'chars'});
      let chars = spt.chars;
      tl.add('start')
        .set('body', {
          width: '100vw',
          overflow: 'hidden'
        })
        .set('aside', {visibility: 'visible'})
        .set('aside li', {
          transformPerspective: 600,
          perspective: 300
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
        }, '0.1', 'afterm', () => {
          this.$store.commit('toggleOpening', false);
        })
        .to('aside', 0.4, {
          yPercent: -100,
          ease: Sine.easeOut
        }, '+=0.5')
        .set('body', {
          clearProps: 'all'
        });
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  aside {
    background: #fff;
    display: grid;
    grid-template-rows: 1fr max-content 1fr;
    grid-row-gap: 2rem;
    height: 100vh;
    box-sizing: border-box;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    visibility: hidden;
    z-index: 1001;
  }
  h1 {
    font-size: 0.9em;
    line-height: 1.25;
    margin: 0;
    padding-top: 3rem;
    @media screen and (min-width: 40rem) {
      padding-top: 5rem;
    }
  }
  ul {
    display: flex;
    font-size: 1.25em;
    line-height: 1.2;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: block;
    transform-style: preserve-3d;
  }
  li + li {
    &:before {
      content: '/';
      display: inline-block;
      padding: 0 1.2rem;
    }
  }
  .logo {
    align-self: center;
    justify-self: center;
    stroke: $text-color;
    height: 15rem;
    max-height: 30vh;
  }
</style>
