<template>
  <div class="container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.4 70" class="logo" aria-labelledby="title" role="presentation">
      <title id="title">MF Logo</title>
      <use xlink:href="#mfLogo" />
    </svg>
    <button class="trigger-btn" aria-label="Open Navigation" @click="$store.commit('toggleTrigger')">
      <div class="nav-label">Menu</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" role="presentation">
        <line x1="0" x2="38" y1="1" y2="1" />
        <line x1="0" x2="38" y1="12" y2="12" />
        <line x1="0" x2="38" y1="23" y2="23" />
      </svg>
    </button>
  </div>
</template>

<script>
  import {TimelineLite, Sine} from 'gsap';
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        isTriggerOpen: 'getTriggerState'
      }),
      year () {
        return (new Date()).getFullYear();
      }
    },
    watch: {
      isTriggerOpen (newValue) {
        if (newValue) {
          this.open(this.$el);
        } else {
          this.close(this.$el);
        }
      }
    },
    methods: {
      open (el) {
        let tl = new TimelineLite();
        tl.add('start')
          .to(el, 0.5, {
            xPercent: 0,
            ease: Sine.easeOut
          });
      },

      close (el) {
        let done = () => {
          this.$store.commit('toggleNav', true);
        };
        let tl = new TimelineLite({onComplete: done});
        tl.add('start')
          .to(el, 0.2, {
            xPercent: -100,
            ease: Sine.easeOut
          }, 'start');
      }

    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 2.5rem;
    position: absolute;
    width: 100%;
    z-index: 1001;
  }
  svg {
    stroke: $text-color;
  }
  .logo {
    width: 5rem;
    height: 5rem;
  }
  .trigger-btn {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin: 0.6rem 0 0;
    padding: 0;
    position: relative;

    svg {
      width: 3rem;
      height: 2rem;
    }

    line {
      stroke-width: 1px;
      stroke-dasharray: 40px;
      transition: stroke-dashoffset 0.2s ease-out 0.2s;
    }
  }
  .nav-label {
    font-size: 0.5em;
    letter-spacing: 0.1em;
    max-width: 0.01em;
    overflow: hidden;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    transform: translateY(0.7em);
    transition: max-width 0.3s ease-out;
    width: 100%;
  }

  @include bp(md) {
    .container {
      position: fixed;
      flex-direction: column;
      width: auto;
    }
    .trigger-btn {
      padding: 1rem 0;
      margin-left: 0.5rem;

      &:hover {
        .nav-label {
          max-width: 100px;
          transition: max-width 0.3s ease-out 0.1s;
        }
        line:nth-child(2) {
          stroke-dashoffset: -40px;
          transition: stroke-dashoffset 0.2s ease-out;
        }
      }
    }
  }
</style>
