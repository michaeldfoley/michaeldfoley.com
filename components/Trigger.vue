<template>
  <div class="container" :class="{ show: isTriggerOpen, 'trigger-fixed': triggerFixed }">
    <button class="trigger-btn" aria-label="Open Navigation" :tabindex="tabIndex" :aria-expanded="isNavOpen.toString()" @click="$store.commit('toggleNav')">
      <div class="nav-label">Menu</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 24" role="presentation">
        <line x1="0" x2="38" y1="2" y2="2" />
        <line x1="0" x2="38" y1="12" y2="12" />
        <line x1="0" x2="38" y1="22" y2="22" />
      </svg>
    </button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data () {
      return {
        scrollY: 0,
        triggerFixed: false,
        windowHeight: 0
      };
    },
    computed: {
      ...mapGetters({
        isTriggerOpen: 'getTriggerState',
        isNavOpen: 'getNavState'
      }),
      year () {
        return (new Date()).getFullYear();
      },
      tabIndex () {
        return (this.isTriggerOpen) ? 0 : -1;
      }
    },
    beforeMount () {
      this.windowHeight = window.innerHeight;
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.updateHeight);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.updateHeight);
      this.$store.commit('toggleTrigger', false);
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    display: inline-block;
    padding-top: 2rem;
    position: absolute;
    right: 0;
    transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    transform: translateX(100%);
    z-index: 1001;
  }
  .show {
    transform: translateX(0);
  }
  svg {
    stroke: $text-color;
  }
  .trigger-btn {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin-top: 0;
    padding: 0;
    position: relative;

    svg {
      width: 2.8rem;
      height: 1.9rem;
    }

    line {
      stroke-width: 1px;
      stroke-dasharray: 40px;
      transition: stroke-dashoffset 0.2s ease-out 0.2s;
    }
  }
  .nav-label {
    display: none;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0.7em 0 0 0.5em;
    width: 100%;
  }

  @include bp(md) {
    .container {
      height: 100%;
      left: 0;
      right: auto;
      padding: 50vh 1.5rem 0;
      transform: translateX(-110%);
    }
    .show {
      transform: translateX(0);
    }
    .trigger-btn {
      margin: 5rem 0 0 0.3rem;
      padding: 1rem 0;
      position: sticky;
      top: 30vh;

      line {
        stroke-width: 2px;
        stroke-dasharray: 30px;
        stroke-dashoffset: -5px;
      }

      &:hover line {
        transition: stroke-dashoffset 0.2s ease-out;

        &:nth-child(1) {
          stroke-dashoffset: -10px;
        }
        &:nth-child(2) {
          stroke-dashoffset: 0px;
        }
        &:nth-child(3) {
          stroke-dashoffset: -15px;
        }
      }
    }
    .nav-label {
      display: block;
    }
  }
</style>
