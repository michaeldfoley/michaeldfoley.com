<template>
  <main>
    <section class="intro">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.4 70" class="logo" role="presentation" preserveAspectRatio="xMaxYMax" focusable="false">
        <title id="title">MF Logo</title>
        <use xlink:href="#mfLogo" />
      </svg>
      <h1>Michael Foley</h1>
      <div class="bio">
        <h2>Located in Brooklyn, I have been creating websites for more than 10 years.</h2>
        <p>I am currently working as a frontend developer and email designer at Fordham University. I pride myself in being able to distill complex concepts into easy-to-use, accessible interfaces. I love working in Javascript, but also have extensive experience developing for Wordpress.</p>
      </div>
      <ul class="skills">
        <li>Frontend</li>
        <li>Wordpress</li>
        <li>Email</li>
      </ul>
      <nav role="navigation">
        <ul class="nav-other">
          <li><nuxt-link to="/available">Resume</nuxt-link></li>
          <li><a href="mailto:mike@foley.is">Contact</a></li>
        </ul>

      </nav>
    </section>
    <email-template url="/working/emails" heading="h3"></email-template>
  </main>
</template>

<script>
import EmailTemplate from '~/components/portfolio/EmailTemplate';
import {TimelineLite, TweenLite, Sine} from 'gsap';
if (process.browser) {
  require('gsap/ScrollToPlugin');
}

export default {
  head: {
    title: 'Work'
  },
  components: {
    EmailTemplate
  },
  transition: {
    mode: 'out-in',
    css: false,
    leave (el, done) {
      let tl = new TimelineLite({onComplete: done});
      let section = document.getElementById(this.$route.name);
      TweenLite.set('.btn', {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      });
      tl.add('leave');

      if (section) {
        tl.to(section, 0.4, {
          minHeight: '0',
          height: '50vh',
          marginBottom: '50vh',
          ease: Sine.easeOut
        }, 'leave')
          .to(window, 0.4, {
            scrollTo: section,
            ease: Sine.easeOut
          }, 'leave')
          .to('.description p', 0.4, {
            overflow: 'hidden',
            height: 0,
            opacity: 0,
            ease: Sine.easeOut
          }, 'leave')
          .to('.btn', 0.3, {
            z: -100,
            rotationY: 90,
            ease: Sine.easeOut
          }, 'leave+=0.2');
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  $grid-break: 37.5rem;

  main {
    background: white;
  }
  .card {
    min-height: 100vh;
  }
  .intro {
    background: #fff linear-gradient(180deg, #fff, #fbfafa);
    border-bottom: 1px solid #ebeaea;
    display: grid;
    grid-template-columns:  2fr min-content minmax(auto, 65ch) 2fr 1fr;
    grid-template-rows: min-content 1fr min-content 1fr 25vh;
    grid-gap: 1.5rem 2rem;
    min-height: 100vh;
  }
  nav {
    font-family: $font_head;
    font-size: 0.85em;
    grid-column: 3 / 5;
    grid-row: 1;
    text-align: right;
  }
  h1 {
    align-self: end;
    grid-column: 3;
    grid-row: 1;
    font-size: 0.9em;
    line-height: 1.5;
    margin: 0;

    @media screen and (min-width: $grid-break) {
      grid-row: 2;
    }
  }
  h2 {
    font-size: 1.2em;
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin: 0 0 1.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .nav-other {
    margin: 2rem 0 0;
  }
  .bio {
    grid-column: 3;
    grid-row: 3;
    margin: 0;
  }
  .logo {
    grid-column: 3 / 6;
    grid-row: 4 / 6;
    height: 100%;
    max-height: 35vh;
    max-width: 50vw;
    opacity: 0.1;
    stroke: $text-color;
    transform-origin: 0 0;
    align-self: end;
    justify-self: end;

    @media screen and (min-width: $grid-break) {
      grid-row: 5;
    }
  }
  .skills {
    display: none;
    color: lighten($text-color, 22%);
    font-family: $font_head;
    font-size: 0.9em;
    margin-top: 0.4em;
    grid-column: 3;
    grid-row: 3;

    @media screen and (min-width: $grid-break) {
      display: block;
      grid-column: 2;
      grid-row: 3;
      margin-right: 4rem;
      writing-mode: vertical-rl;
    }
  }


  @include bp(md) {
    .email-images {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;

      img {
        width: 100%;
      }
    }
  }

  .page-head {
    height: 100vh;
  }
</style>
