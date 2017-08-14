<template>
  <div>
    <div id="navbar" class="bar">
      <nav>
        <nuxt-link exact to="/">Work</nuxt-link>
        <nuxt-link to="/adogperson">About</nuxt-link>
        <nuxt-link to="/available">Resume</nuxt-link>
      </nav>
    </div>

    <nuxt-link exact to="/" class="logo" id="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="71.4px" height="70px" viewBox="0 0 71.4 70" aria-labelledby="title" role="presentation">
        <title id="title" lang="en">MF Logo</title>
        <defs>
          <clipPath id="mf">
            <path id="clipm" d="M21.4,32.5V15.2c0-5.7-0.7-8.4-4.4-8.4c-6.3,0-9.2,4.4-9.2,4.4V28l0.6,4.5H2.8v-24L2,3l5.8-0.7v4.5c2.5-2.8,6.8-4.7,10.7-4.7c3.2,0,6.3,1.6,7.4,4.7c2.5-2.8,6.8-4.7,10.7-4.7c4,0,7.9,2.3,7.9,7.1v18.9l0.6,4.4h-5.6V15.2c0-5.7-0.7-8.4-4.4-8.4c-4.8,0-7.7,2.7-8.8,3.9v17.4l0.6,4.4H21.4z"/>
            <path id="clipf" fill="#273A93" d="M69.9,17.4c0,0.9-0.2,1.7-0.6,2.3c-0.5,0.8-1.1,1.1-1.9,1.1c-0.7,0-1.4-0.2-1.9-0.5c-0.6-0.4-0.8-0.9-0.8-1.5c0-0.8,0.3-1.4,1-1.8c-0.7-0.4-1.2-0.5-1.7-0.5c-2.6,0-4.9,1.2-6.9,3.7c-1.6,2-3.2,5.1-4.7,9.3l-1,2.9c-1.7,5.3-3.4,10.6-5.2,15.9c-2.2,6.1-4.6,10.7-7.1,13.7c-3.4,3.9-7.4,5.8-12.1,5.8c-1.9,0-3.6-0.5-5.1-1.5c-1.7-1.1-2.6-2.5-2.6-4.3c0-0.8,0.3-1.6,0.9-2.2c0.6-0.6,1.3-0.9,2.1-0.9c0.7,0,1.3,0.2,1.8,0.7c0.5,0.5,0.8,1,0.8,1.7c0,1.3-0.6,2.2-1.7,2.6c1.9,0.6,3.2,1,3.7,1c3.1,0,5.8-1.7,8-5.2c1.6-2.5,3.4-6.7,5.3-12.4c2.9-8.9,4.5-13.8,4.9-14.9l1.2-2.9c4.5-10.4,10.6-15.7,18.4-15.7c1.3,0,2.5,0.3,3.5,0.8C69.3,15.3,69.9,16.2,69.9,17.4z"/>
            <path id="clipline" d="M57.6,29.6l-1.2,2.9H39.6l1.2-2.9H57.6z"/>
          </clipPath>
        </defs>

        <path id="letterm" fill="none" stroke-width="6" stroke-miterlimit="10" d="M4.8,2.2l0.1,6.1l0.8,24.8c0,0-0.2-22.3,0.1-22.7c2-2.7,17.1-10.6,17.6-1.2l0.7,23.3l0.6-23c0,0,16.9-10.3,17,0.4c0,0,0.1,11.7-0.1,18.5l0.6,4.6l0.6,0l0.3,0.1" clip-path="url(#mf)"/>
        <path id="letterf" fill="none" stroke-width="6.1" stroke-linecap="round" stroke-miterlimit="10" d="M67.3,18.7c0.4-3.1-1.9-3.2-5.8-2.6c-4,0.6-8.5,5.8-10.3,8.8c-0.7,1.1-1.4,2.8-2.1,4.8c-0.3,0.8-0.6,1.7-0.9,2.7c-0.8,2.8-2,5.9-3,9.1c-0.8,2.3-1.9,6-2.9,8.5c0,0-3.1,11.3-8.9,15.6c-4.5,3.5-13-2-11.3-4" clip-path="url(#mf)"/>
        <line id="letterfcross" fill="none" stroke-width="3" stroke-miterlimit="10" x1="39.5" y1="31" x2="57.6" y2="31" clip-path="url(#mf)"/>
      </svg>
    </nuxt-link>
  </div>
</template>
<style>
  #logo, #navbar, #main {
    visibility: hidden;
  }
</style>
<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .bar {
    background-image:
      linear-gradient(40deg, transparent 70%,  darken($primary, 5%) 70%),
      linear-gradient(140deg, $primary 30%, darken($primary, 2%) 30%);
    border-top: 1px solid darken($primary, 10%);
    display: flex;
    height: 49px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1001;
  }

  .logo {
    display: inline-block;
    margin: 20px 10px 0;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 0;
    z-index: 1002;

    svg {
      height: 100%;
      width: 100%;
      stroke: #093032;
    }
  }

  nav {
    display: flex;
    flex-grow: 1;
    font-family: $font_head;
    font-size: 1em;
    font-weight: 400;
    margin: 0 20px 0 10px;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    transition: font-size .3s;

    a {
      color: #fff;
      display: block;
      margin: 0 10px;
      text-decoration: none;
    }
  }

  .nuxt-link-active {
    color: #ffffff;
  }

  @media screen and (min-width: 426px) {
    .bar {
      background-image:
        linear-gradient(-40deg, transparent 70%, $primary 70%),
        linear-gradient(40deg, darken($primary, 5%) 30%, darken($primary, 2%) 30%);
      border: 0;
      flex-direction: column;
      height: 100vh;
      width: 70px;
    }
    .logo {
      position: fixed;
    }
    nav {
      font-size: 16px;
      margin: 80px 0 20px;
      max-height: 350px;
      flex-direction: column;
      align-items: center;

      a {
        margin: 10px 0;
        transform: rotate(180deg);
        writing-mode: vertical-rl;
      }
    }
  }

  @media screen and (min-width: 426px) and (min-height: 385px) {
    nav {
      font-size: 19px;
    }
  }

  @media screen and (min-width: 426px) and (min-height: 520px) {
    nav {
      font-size: 21px;
      margin-top: 100px;
    }
  }
</style>
<script>
/* global SplitText */
import {TweenLite, TimelineLite, Sine} from 'gsap';
export default {
  mounted: () => {
    let tl = new TimelineLite();
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    let spt = new SplitText('h1', {type: 'chars'});
    let chars = spt.chars;
    TweenLite.set(chars, {
      transformPerspective: 600,
      perspective: 300,
      transformStyle: 'preserve-3d'
    });
    TweenLite.set('#logo, #navbar, #pageHead, #main', { visibility: 'visible' });
    TweenLite.set('#clipline', { visibility: 'hidden' });
    tl.add('draw');
    tl.from('#letterm', 0.7, {drawSVG: 0})
      .from('#letterf', 0.4, {drawSVG: 0})
      .set('#clipline', { visibility: 'visible' })
      .from('#letterfcross', 0.15, {drawSVG: 0});
    tl.add('slidelogo', '+=0.3');
    tl.from('#logo svg', 0.8, {
      scale: 5,
      stroke: '#ffffff',
      transformOrigin: '50% 50%',
      xPercent: '-50',
      yPercent: '-50',
      x: (vw * 0.5),
      y: (vh * 0.5),
      ease: Sine.easeOut
    }, 'slidelogo');
    tl.from('body', 0.8, { backgroundColor: '#1d7477' }, 'slidelogo');
    tl.add('opening', '-=0.3');
    if (vw < 426) {
      tl.from('#navbar', 0.3, {
        yPercent: 100,
        ease: Sine.easeOut
      }, 'opening');
    } else {
      tl.from('#navbar', 0.3, {
        xPercent: -100,
        ease: Sine.easeOut
      }, 'opening')
        .from('#navbar nav', 0.3, {
          yPercent: -50,
          ease: Sine.easeOut
        }, 'opening');
    }
    tl.from('#pageHead', 0.5, {
      yPercent: -100,
      ease: Sine.easeOut
    }, 'opening')
      .staggerFrom(chars, 0.35, {
        z: -100,
        rotationY: 180,
        opacity: 0.5,
        ease: Sine.easeOut
      }, 0.03, '-=0.2')
      .staggerFrom('#pageImages img', 0.5, {
        opacity: 0,
        yPercent: -100,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, '0.15', 'opening')
      .staggerFrom('#main > *', 0.5, {
        opacity: 0,
        yPercent: -100,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 0.1, 'opening');
  }
};
</script>
