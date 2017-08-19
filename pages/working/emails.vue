<template>
  <div>
    <header-card url="https://github.com/fordhamumc/mailchimp-templates" title="Email Templates" tags="HTML,CSS/SASS,PugJS">
      <div id="pageImages" class="page-image">
        <img src="/img/fordhamnews.jpg" alt="Fordham News">
        <img src="/img/travel.jpg" alt="Travel">
        <img src="/img/event.jpg" alt="Event">
        <img src="/img/alumninews.jpg" alt="Alumni News">
      </div>
    </header-card>
    <main class="container" id="main">
      <section class="text tldr">
        <p>Developed a universal Mailchimp email template that can be used by designers with limited technical abilities to create modern and cross-client emails without having to write code.</p>
      </section>
      <hr class="section--break">
      <section class="text">
        <h2>Brief</h2>
        <p>Fordham&rsquo;s marketing department produces close to 1,000 email messages per year. With only 1 developer on staff, the varying technical abilities of the design staff, and the eccentricities of the hundreds of email clients in existence, a template that was needed that could be used to create everything from event invitations to newsletters which would render properly on any email client and device but require minimal technical ability.</p>
      </section>
      <section class="text">
        <h2>Metrics</h2>
        <p>Success of this project would be measured by the number of email jobs that could be handled by the design staff and the reduction in the number of support requests that I received. </p>
      </section>
      <section class="text">
        <h2>Challenges/Solutions</h2>
        <p>I decided early on to build the template as a collection of interchangeable modules. This allowed me to create fewer templates that could solve more problems and allowed the designers more flexibility in how they arranged an email to fit to the content. Since the templates themselves were going to function modularly, I also build a design system for building the templates that was modular. This allowed me to also recycle modules across templates further reducing redundant work. This allowed updates to a module to propagate throughout all templates automatically.</p>
        <p>To accompany the new templates, I built a comprehensive online documentation that not only explained the templates but also the department&rsquo;s email process and best practices.</p>
      </section>
    </main>
    <next-project url="http://something.com">Some Project</next-project>
  </div>
</template>

<script>
  /* global SplitText */
  import {TimelineLite, TweenLite, Sine} from 'gsap';
  import HeaderCard from '~components/HeaderCard';
  import NextProject from '~components/NextProject';
  export default {
    layout: 'page',
    head: {
      title: 'Email Templates'
    },
    components: {
      HeaderCard,
      NextProject
    },
    transition: {
      mode: 'out-in',
      css: false,
      enter (el, done) {
        console.log('enter', el);
        let tl = new TimelineLite({onComplete: done});
        let spt = new SplitText('h1', {type: 'chars'});
        let chars = spt.chars;
        TweenLite.set(chars, {
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
        let tl = new TimelineLite({onComplete: done});
        TweenLite.set('h1', {
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

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .page-image {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    grid-auto-rows: minmax(100px, auto);
    margin: 0 1.5rem;

    img {
      max-width: 100%;
      box-shadow: -4px 5px 15px 0 rgba(0, 0, 0, 0.56);
    }
  }
</style>
