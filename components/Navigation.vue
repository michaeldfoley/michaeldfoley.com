<template>
  <transition v-on:enter="open" v-on:leave="close" :css="false">
    <div id="navbar">
      <div class="container" role="banner">
        <div class="nav-name">Michael&nbsp;Foley</div>
        <div class="bar">
          <nav class="nav-case" aria-labelledby="caseLabel">
            <div id="caseLabel" class="nav-label">Case Studies</div>
            <nuxt-link to="/working/emails">Email Templates</nuxt-link>
            <nuxt-link to="/working">Giving Day</nuxt-link>
            <nuxt-link to="/working">Collaborative Playlist</nuxt-link>
            <nuxt-link to="/working">Photo Galley</nuxt-link>
          </nav>
          <nav class="nav-social" aria-labelledby="socialLabel">
            <div id="socialLabel" class="nav-label">Follow Me</div>
            <a href="https://twitter.com/michaeldfoley">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 204" aria-labelledby="title" role="presentation">
                <title id="title" lang="en">Twitter</title>
                <path d="M78.6,203.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7C80.4,61.3,42.7,40.8,17.4,9.8c-4.4,7.6-6.9,16.4-6.9,25.8c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7C22.6,195.1,49.6,203.6,78.6,203.6"/>
              </svg>
            </a>
            <a href="https://github.com/michaeldfoley">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" aria-labelledby="title" role="presentation">
                <title id="title" lang="en">Github</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5,0.1c-9,0-16.3,7.3-16.3,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4c-0.2-0.4-0.7-2.1,0.2-4.3c0,0,1.4-0.4,4.5,1.7C13.7,8.2,15.1,8,16.5,8c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.8,7.4,25.5,0.1,16.5,0.1z"/>
              </svg>
            </a>
            <a href="https://codepen.io/mdf">
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
            </a>
          </nav>
          <nav class="nav-other" aria-label="Other Links">
            <nuxt-link exact to="/">Home</nuxt-link>
            <nuxt-link to="/available">Resume</nuxt-link>
            <a href="mailto:mike@foley.is">Contact</a>
          </nav>

        </div>
        <div class="copyright">
          &copy; {{year}} Michael Foley
        </div>
      </div>
      <div class="js-overlay" @click="$store.commit('closeNav')"></div>
    </div>
  </transition>
</template>
<script>
  /* global SplitText */
  import {TimelineLite, Sine, Back} from 'gsap';
  export default {
    computed: {
      year () {
        return (new Date()).getFullYear();
      }
    },
    methods: {
      open (el, done) {
        let nav = el.firstChild;
        let navw = nav.clientWidth;
        let btn = document.querySelector('#identity button');
        let tl = new TimelineLite({onComplete: done});
        let spt = new SplitText('.nav-name', {type: 'chars'});
        let chars = spt.chars;
        tl.from('.js-overlay', 0.2, {
          opacity: 0,
          clearProps: 'all',
          ease: Sine.easeOut
        })
          .add('start')
          .from(nav, 0.5, {
            xPercent: -100,
            clearProps: 'all',
            ease: Sine.easeOut
          }, 'start')
          .add('opened')
          .to(btn, 0.5, {
            y: 0 - btn.offsetTop,
            x: navw
          }, 'start')
          .to('#identity button svg, #identity .logo', 0.5, {
            stroke: '#fff'
          }, 'start')
          .to('#pageContent', 0.6, {
            x: navw,
            ease: Back.easeOut
          }, 'start+=0.1')
          .staggerFrom('.nav-case a', 0.4, {
            opacity: 0,
            yPercent: 100,
            ease: Sine.easeOut
          }, 0.1, 'start+=0.2')
          .staggerFrom(chars, 0.2, {
            opacity: 0,
            xPercent: -100,
            ease: Sine.easeOut
          }, '0.03', 'opened-=0.1');
      },

      close (el, done) {
        let nav = el.firstChild;
        let tl = new TimelineLite({onComplete: done});
        tl.add('start')
          .to(nav, 0.5, {
            xPercent: -100,
            ease: Sine.easeOut
          }, 'start')
          .to('#identity .logo, #identity button svg', 0.5, {
            stroke: '#3b3a36'
          }, 'start')
          .to('#identity button, #pageContent', 0.5, {
            x: 0,
            y: 0,
            ease: Sine.easeOut
          }, 'start')
          .to('.js-overlay', 0.2, {
            opacity: 0,
            clearProps: 'all',
            ease: Sine.easeOut
          })
          .set(nav, {clearProps: 'all'});
      }
    }
  };
</script>
<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .container {
    background-image: linear-gradient(120deg, #13547a, #618a93 60%, #e5e5be);
    background-image: linear-gradient(120deg, #0B549F 30%, #7DD2CC 80%, #D2EAD6 100%);
    background-size: 100vw 100vh;
    background-position: right center;
    color: #fff;
    display: grid;
    grid-template-rows: 70px auto;
    grid-gap: 4rem;
    align-items: start;
    height: 100vh;
    width: 40rem;
    max-width: 80vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
  }

  .nav-name {
    align-self: center;
    margin-top: 0.4em;
    margin-left: 70px;
  }

  .bar {
    display: grid;
    grid-gap: 3rem;
    align-items: start;
  }

  nav {
    a {
      display: block;
      font-size: 1.5em;
      line-height: 1.4;
    }
  }

  a {
    color: #fff;
  }

  .nav-name,
  .nav-label,
  .nav-other a,
  .copyright {
    font-family: $font_head;
    font-size: 0.8em;
    text-transform: uppercase;
  }

  .nav-label {
    grid-column: span 3;
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

  .nav-other {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      padding: .5rem 0;
    }
  }

  .nav-social {
    display: grid;
    grid-gap: 1rem;
    justify-content: flex-start;

    a {
      line-height: 1;
    }

    svg {
      fill: #ffffff;
      stroke: #ffffff;
      height: 2rem;
      width: 2rem;
    }
  }

  .copyright {
    align-self: flex-end;
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

  @media screen and (min-width: 426px) and (min-height: 385px) {
  }

  @media screen and (min-width: 426px) and (min-height: 520px) {
  }
</style>
