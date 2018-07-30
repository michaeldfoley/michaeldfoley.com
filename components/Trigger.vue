<template>
  <div class="container" :class="{ show: isTriggerOpen }">
    <button class="trigger-btn" aria-label="Open Navigation" :tabindex="tabIndex" :aria-expanded="isNavOpen.toString()" @click="toggleNav" @focus="mouseEnter" @blur="mouseLeave" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" class="bg">
        <rect x="0" y="0" width="32" height="32" />
        <rect x="0" y="0" width="32" height="32" id="stroke" />
      </svg>
      <div class="label">Menu</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16" role="presentation" id="buns">
        <line x1="0" x2="30" y1="2" y2="2" />
        <line x1="0" x2="30" y1="14" y2="14" />
      </svg>
    </button>
  </div>
</template>

<script>
  /* global SplitText */
  import { mapGetters, mapMutations } from 'vuex';
  import { TimelineLite, Sine } from 'gsap';
  if (process.browser) {
    require('~/plugins/SplitText');
    require('~/plugins/DrawSVGPlugin');
  }
  export default {
    data () {
      return {
        animated: false
      };
    },
    computed: {
      ...mapGetters({
        isTriggerOpen: 'getTriggerState',
        isNavOpen: 'getNavState'
      }),
      tabIndex () {
        return (this.isTriggerOpen) ? false : -1;
      }
    },
    beforeDestroy () {
      this.toggleTrigger(false);
    },
    methods: {
      ...mapMutations([
        'toggleNav',
        'toggleTrigger'
      ]),
      mouseEnter () {
        if (this.animated === true) return;
        this.animated = true;
        let tl = new TimelineLite();
        let spt = new SplitText('.label', {type: 'chars'});
        let chars = spt.chars;
        tl.add('start')
          .set('#stroke', {strokeWidth: 2})
          .set('.label', {display: 'block'})
          .to('#buns line:first-child', 0.2, {
            y: 6,
            ease: Sine.easeOut
          }, 'start')
          .to('#buns line:last-child', 0.2, {
            y: -6,
            ease: Sine.easeOut
          }, 'start')
          .add('line')
          .to('#buns line', 0.2, {
            xPercent: 110,
            ease: Sine.easeOut
          }, 'line')
          .staggerFrom(chars, 0.2, {
            opacity: 0,
            xPercent: -100,
            ease: Sine.easeOut
          }, '0.03', 'line')
          .from('#stroke', 0.5, {
            drawSVG: 0,
            ease: Sine.easeOut
          }, 'start');
      },
      mouseLeave () {
        this.animated = false;
        let tl = new TimelineLite();
        let spt = new SplitText('.label', {type: 'chars'});
        let chars = spt.chars;
        tl.add('start')
          .set('#stroke', {strokeWidth: 2})
          .staggerTo(chars, 0.2, {
            opacity: 0,
            xPercent: -100,
            ease: Sine.easeOut
          }, '0.03', 'start')
          .set('.label', {clearProps: 'all'})
          .set(chars, {clearProps: 'all'})
          .to('#buns line', 0.2, {
            xPercent: 0,
            ease: Sine.easeOut
          }, 'start+=0.1')
          .add('line')
          .to('#buns line', 0.2, {
            y: 0,
            ease: Sine.easeOut,
            clearProps: 'all'
          }, 'line-=0.05')
          .to('#stroke', 0.5, {
            drawSVG: 0,
            ease: Sine.easeOut
          }, 'start')
          .set('#stroke', {clearProps: 'all'});
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    display: inline-block;
    padding: 1.5rem;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    transform: translateX(100%);
    z-index: 1001;
  }
  .show {
    transform: translateX(0);
  }
  .trigger-btn {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin-top: 0;
    width: 4.5rem;
    height: 4.5rem;
    padding: 0;
    position: relative;

    &:hover,
    &:focus {
      outline: 0;

      #stroke {
        stroke-width: 2px;
      }
      label {
        display: block;
      }
    }
  }
  #buns {
    stroke: $text-color;
    width: 2.4rem;
    height: 1.2rem;
    position: relative;
    z-index: 1000;
    line {
      stroke-width: 2px;
    }
  }
  .bg {
    fill: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(45deg);
  }
  #stroke {
    fill: none;
    stroke-width: 0;
    stroke: rgba($text-color, 0.5);
  }
  .label {
    display: none;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 1001
  }

  @include bp(md) {
    .container {
      left: 1rem;
      right: auto;
      position: fixed;
      transform: translateX(-110%);
    }
    .show {
      transform: translateX(0);
    }
  }
</style>
