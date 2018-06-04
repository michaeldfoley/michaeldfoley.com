<template>
  <div>
    <main id="main">
      <email-template url="https://github.com/fordhamumc/mailchimp-templates" container="header" dclass="hidden"></email-template>
      <section class="text tldr">
        <p>Developed a universal Mailchimp email template that can be used by designers with limited technical abilities to create modern and cross-client emails without having to write code.</p>
      </section>
      <hr class="section--break">
      <section class="text">
        <h2 class="section-header">Brief</h2>
        <p>Fordham&rsquo;s marketing department produces close to 1,000 email messages per year. With only 1 developer on staff, the varying technical abilities of the design staff, and the eccentricities of the hundreds of email clients in existence, a template that was needed that could be used to create everything from event invitations to newsletters which would render properly on any email client and device but require minimal technical ability.</p>
      </section>
      <section class="text">
        <h2 class="section-header">Metrics</h2>
        <p>Success of this project would be measured by the number of email jobs that could be handled by the design staff and the reduction in the number of support requests that I received. </p>
      </section>
      <section class="text">
        <h2 class="section-header">Challenges/Solutions</h2>
        <p>I decided early on to build the template as a collection of interchangeable modules. This allowed me to create fewer templates that could solve more problems and allowed the designers more flexibility in how they arranged an email to fit to the content. Since the templates themselves were going to function modularly, I also build a design system for building the templates that was modular. This allowed me to also recycle modules across templates further reducing redundant work. This allowed updates to a module to propagate throughout all templates automatically.</p>
        <p>To accompany the new templates, I built a comprehensive online documentation that not only explained the templates but also the department&rsquo;s email process and best practices.</p>
      </section>
    </main>
    <next-project url="/working">Some Project</next-project>
  </div>
</template>

<script>
  /* global SplitText */
  import {TimelineLite, Sine} from 'gsap';
  import EmailTemplate from '~/components/portfolio/EmailTemplate';
  import NextProject from '~/components/NextProject';
  import { mapGetters } from 'vuex';
  export default {
    head: {
      title: 'Email Templates'
    },
    components: {
      EmailTemplate,
      NextProject
    },
    computed: {
      ...mapGetters({
        isOpeningFinished: 'getOpeningState'
      })
    },
    watch: {
      isOpeningFinished (state) {
        if (!state) {
          console.log('Opening Finished', this);
        }
      }
    },
    transition: {
      mode: 'out-in',
      css: false,
      enter (el, done) {
        let tl = new TimelineLite({onComplete: () => {
          this.$store.commit('toggleTrigger', true);
          done();
        }});
        tl.add('opening');
        let spt = new SplitText('h1', {type: 'chars'});
        console.log(spt);
        tl.add('opening')
          .staggerFrom('#main > section', 0.5, {
            opacity: 0,
            yPercent: -100,
            transformOrigin: '50% 50%',
            ease: Sine.easeOut
          }, 0.1, 'opening')
          .from('.btn', 0.6, {
            z: -100,
            rotationY: -90,
            ease: Sine.easeOut
          }, 'opening');
        /* console.log('enter transition', window.$nuxt);
        let chars = spt.chars;
        let perspective = {
          transformPerspective: 600,
          perspective: 300,
          transformStyle: 'preserve-3d'
        };
        TweenLite.set(chars, perspective);
        TweenLite.set('.headline .btn', perspective);
        tl.add('opening')
          .add('headline', 'opening+=0.5')
          .from('#pageHead', 0.5, {
            yPercent: -100,
            ease: Sine.easeOut
          }, 'opening')
          .staggerFrom(chars, 0.35, {
            z: -100,
            rotationY: 180,
            opacity: 0.5,
            ease: Sine.easeOut
          }, 0.03, 'opening+=0.3')
          .staggerFrom('.meta-tags li', 0.35, {
            xPercent: -100,
            opacity: 0,
            ease: Sine.easeOut
          }, 0.08, 'headline')
          .from('.headline .btn', 0.35, {
            rotationY: 90,
            ease: Sine.easeOut,
            clearProps: 'all'
          }, 'headline')
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
          }, 0.1, 'opening')
          .from('.next-project a', 0.5, {
            opacity: 0,
            yPercent: 100
          }, '-=0.5');
          */
      },
      leave (el, done) {
        let tl = new TimelineLite({onComplete: done});
        tl.add('leave');
        if (this.$route.name === 'index') {
          tl.to(window, 0.4, {
            scrollTo: '#working-emails',
            ease: Sine.easeOut
          }, 'leave')
            .to('#working-emails', 0.4, {
              minHeight: '100vh',
              ease: Sine.easeIn
            }, 'leave')
            .add('show', 'leave+=0.3')
            .to('#working-emails .hidden', 0.3, {
              display: 'block',
              maxHeight: 150,
              opacity: 1,
              ease: Sine.easeOut
            }, 'show')
            .to('#working-emails .btn', 0.3, {
              z: -100,
              rotationY: -90,
              ease: Sine.easeOut
            }, 'show');
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .card {
    height: 50vh;
    margin-bottom: $section-break;
  }
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
