<template>
  <div id="navbar" class="container" role="banner" v-show="show" :aria-hidden="!isNavOpen.toString()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.4 70" class="nav-logo" role="presentation">
      <title id="title">MF Logo</title>
      <use xlink:href="#mfLogo" />
    </svg>
    <div class="nav-name">Michael&nbsp;Foley</div>
    <button class="nav-close" :aria-expanded="isNavOpen.toString()" @click="$store.commit('toggleNav', false)" aria-label="Close Navigation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" focusable="false">
        <line x1="0" x2="32" y1="0" y2="32" class="cross-line" />
        <line x1="0" x2="32" y1="32" y2="0" class="cross-line" />
      </svg>
    </button>
    <nav role="navigation">
      <div id="caseLabel" class="nav-label">Case Studies</div>
      <ul class="nav-case" role="menu" aria-labelledby="caseLabel">
        <li><nuxt-link to="/working/emails">Email Templates</nuxt-link></li>
        <li><nuxt-link to="/working/giving">Giving Day</nuxt-link></li>
        <li><nuxt-link to="/working">Collaborative Playlist</nuxt-link></li>
        <li><nuxt-link to="/working">Photo Galley</nuxt-link></li>
      </ul>
      <div id="socialLabel" class="nav-label">Follow Me</div>
      <ul class="nav-social" role="menu" aria-labelledby="socialLabel">
        <li><a href="https://twitter.com/michaeldfoley">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 204" aria-labelledby="title" role="presentation">
            <title id="title" lang="en">Twitter</title>
            <path d="M78.6,203.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7C80.4,61.3,42.7,40.8,17.4,9.8c-4.4,7.6-6.9,16.4-6.9,25.8c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7C22.6,195.1,49.6,203.6,78.6,203.6"/>
          </svg>
        </a></li>
        <li><a href="https://github.com/michaeldfoley">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" aria-labelledby="title" role="presentation">
            <title id="title" lang="en">Github</title>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5,0.1c-9,0-16.3,7.3-16.3,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4c-0.2-0.4-0.7-2.1,0.2-4.3c0,0,1.4-0.4,4.5,1.7C13.7,8.2,15.1,8,16.5,8c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.8,7.4,25.5,0.1,16.5,0.1z"/>
          </svg>
        </a></li>
        <li><a href="https://codepen.io/mdf">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 474 474" aria-labelledby="title" role="presentation">
            <title id="title" lang="en">CodePen</title>
            <polygon fill="#FFFFFF" points="115.9,216 115.9,258 147.3,237"/>
            <polygon fill="#FFFFFF" points="224.4,185.4 224.4,126.8 125.9,192.5 169.9,221.9"/>
            <polygon fill="#FFFFFF" points="348.1,192.5 249.6,126.8 249.6,185.4 304.1,221.9"/>
            <polygon fill="#FFFFFF" points="125.9,281.6 224.4,347.2 224.4,288.6 169.9,252.1"/>
            <polygon fill="#FFFFFF" points="249.6,288.6 249.6,347.2 348.1,281.6 304.1,252.1"/>
            <polygon fill="#FFFFFF" points="237,207.3 192.5,237 237,266.7 281.5,237"/>
            <path fill="#FFFFFF" d="M237,0.5C106.4,0.5,0.5,106.4,0.5,237c0,130.6,105.9,236.5,236.5,236.5c130.6,0,236.5-105.9,236.5-236.5C473.5,106.4,367.6,0.5,237,0.5z M383.3,281.6c0,0.6,0,1.1-0.1,1.6c0,0.2-0.1,0.4-0.1,0.5c-0.1,0.4-0.1,0.7-0.2,1.1c-0.1,0.2-0.1,0.4-0.2,0.6c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.3-0.3,0.6-0.4,0.8c-0.1,0.2-0.2,0.4-0.4,0.6c-0.2,0.3-0.3,0.5-0.5,0.8c-0.1,0.2-0.3,0.4-0.4,0.5c-0.2,0.2-0.4,0.5-0.6,0.7c-0.2,0.2-0.3,0.3-0.5,0.5c-0.2,0.2-0.5,0.4-0.7,0.6c-0.2,0.1-0.4,0.3-0.6,0.4c-0.1,0-0.1,0.1-0.2,0.2L244,381.1c-2.1,1.4-4.5,2.1-7,2.1c-2.4,0-4.9-0.7-7-2.1L96.3,292c-0.1,0-0.1-0.1-0.2-0.2c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.2-0.5-0.4-0.7-0.6c-0.2-0.2-0.3-0.3-0.5-0.5c-0.2-0.2-0.4-0.4-0.6-0.7c-0.1-0.2-0.3-0.4-0.4-0.5c-0.2-0.2-0.4-0.5-0.5-0.8c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.3-0.3-0.6-0.4-0.8c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.3-0.2-0.7-0.2-1.1c0-0.2-0.1-0.4-0.1-0.5c-0.1-0.5-0.1-1.1-0.1-1.6v-89.1c0-0.6,0-1.1,0.1-1.6c0-0.2,0.1-0.4,0.1-0.5c0.1-0.4,0.1-0.7,0.2-1.1c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.3,0.3-0.6,0.4-0.8c0.1-0.2,0.2-0.4,0.4-0.6c0.2-0.3,0.3-0.5,0.5-0.8c0.1-0.2,0.3-0.4,0.4-0.5c0.2-0.2,0.4-0.5,0.6-0.7c0.2-0.2,0.3-0.3,0.5-0.5c0.2-0.2,0.5-0.4,0.7-0.6c0.2-0.1,0.4-0.3,0.6-0.4c0.1,0,0.1-0.1,0.2-0.2L230,92.9c4.2-2.8,9.7-2.8,13.9,0L377.7,182c0.1,0,0.1,0.1,0.2,0.2c0.2,0.1,0.4,0.3,0.6,0.4c0.2,0.2,0.5,0.4,0.7,0.6c0.2,0.2,0.3,0.3,0.5,0.5c0.2,0.2,0.4,0.4,0.6,0.7c0.2,0.2,0.3,0.4,0.4,0.5c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.3,0.3,0.5,0.4,0.8c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.2,0.1,0.4,0.2,0.6c0.1,0.3,0.2,0.7,0.2,1.1c0,0.2,0.1,0.4,0.1,0.5c0.1,0.5,0.1,1.1,0.1,1.6V281.6z"/>
            <polygon fill="#FFFFFF" points="358.1,258 358.1,216 326.7,237"/>
          </svg>
        </a></li>
      </ul>
      <ul class="nav-other" role="menu" aria-label="Other Links">
        <li><nuxt-link exact to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/available">Resume</nuxt-link></li>
        <li><a href="mailto:mike@foley.is">Contact</a></li>
      </ul>
    </nav>

    <div class="copyright">
      &copy; {{year}} Michael Foley
    </div>
  </div>
</template>
<script>
  /* global SplitText */
  import {TimelineLite, Sine} from 'gsap';
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        isNavOpen: 'getNavState'
      }),
      year () {
        return (new Date()).getFullYear();
      }
    },
    data () {
      return {
        show: this.isNavOpen
      };
    },
    watch: {
      isNavOpen (newValue) {
        if (newValue) {
          this.open(this.$el);
        } else {
          this.close(this.$el);
        }
      }
    },
    beforeMount () {
      window.addEventListener('keyup', this.onEscapeKeyUp);
    },
    beforeDestroy () {
      window.removeEventListener('keyup', this.onEscapeKeyUp);
    },
    methods: {
      onEscapeKeyUp (event) {
        if (event.which === 27 && this.show) {
          this.close(this.$el);
        }
      },
      open (el) {
        this.show = true;
        this.$store.commit('toggleTrigger', false);
        let tl = new TimelineLite();
        let spt = new SplitText('.nav-name', {type: 'chars'});
        let chars = spt.chars;
        tl.delay(0.3)
          .add('start')
          .to(el, 0.5, {
            xPercent: 100,
            ease: Sine.easeOut
          })
          .add('opened')
          .staggerFrom('.nav-case a', 0.4, {
            opacity: 0,
            yPercent: 100,
            ease: Sine.easeOut,
            clearProps: 'all'
          }, 0.1, 'start+=0.2')
          .staggerFrom(chars, 0.2, {
            opacity: 0,
            xPercent: -100,
            ease: Sine.easeOut
          }, '0.03', 'opened-=0.1')
          .from('.nav-close', 0.2, {
            opacity: 0,
            scale: 0.2,
            ease: Sine.easeOut
          }, 'opened');
      },

      close (el) {
        let done = () => {
          this.$store.commit('toggleTrigger', true);
          this.show = false;
        };
        let tl = new TimelineLite({onComplete: done});
        tl.add('start')
          .to(el, 0.5, {
            xPercent: 0,
            ease: Sine.easeOut
          }, 'start')
          .to('.js-overlay', 0.2, {
            opacity: 0,
            ease: Sine.easeOut
          });
      }
    }
  };
</script>
<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    background-image: linear-gradient(120deg, #0B549F 30%, #7DD2CC 80%, #D2EAD6 100%);
    background-size: 100vw 100vh;
    background-position: right center;
    color: #fff;
    display: grid;
    grid-template-rows: 9rem auto auto;
    grid-template-columns: 5rem auto 1.6rem;
    grid-gap: 1rem;
    align-items: start;
    height: 100vh;
    width: 40rem;
    max-width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
    transform: translate(-100%, 0%)
  }

  a {
    color: #fff;
  }

  nav a {
    display: block;
    line-height: 1.4;
  }

  ul {
    padding: 0;
    margin: 0 0 3rem;

    a {
      transition: opacity 0.2s;
    }

    &:hover,
    &:focus-within {
      a {
        opacity: 0.3;

        &:hover,
        &:focus {
          opacity: 1;
        }
      }
    }
  }

  li {
    list-style: none;

  }

  nav, .copyright {
    grid-column: span 3;
  }

  .nav-name,
  .nav-label,
  .nav-other,
  .copyright {
    font-family: $font_head;
    font-size: 0.8em;
    text-transform: uppercase;
  }

  .nav-case {
    font-size: 1.5em;
  }

  .nav-logo {
    height: 5rem;
    width: 5rem;
    stroke: #fff;
    margin-top: 2rem;
  }

  .nav-name {
    margin-top: 3rem;
  }

  .nav-close {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    margin: 2.9rem 0 0;
    padding: 0;
    text-align: left;

    svg {
      stroke: #fff;
      stroke-width: .1em;
    }
  }

  .nav-label {
    font-weight: $weight_head;
    opacity: 0.7;

    &:after {
      content: '';
      background: #fff;
      display: block;
      height: 2px;
      width: 20px;
    }
  }

  .nav-social {
    display: inline-flex;
    margin-top: 0.4em;

    li + li {
      margin-left: 1rem;
    }
    svg {
      fill: #ffffff;
      stroke: #ffffff;
      height: 2rem;
      width: 2rem;
    }
    a:after {
      content: none;
    }
  }

  .nav-other {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    li {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
      padding: .5rem 0;
    }
  }

  .copyright {
    align-self: end;
    font-size: 0.7em;
    margin-bottom: 1rem;
  }

  .js-overlay {
    background: rgba(0,0,0,0.4);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  @include bp(md) {
    .container {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  @keyframes shimmer{
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
