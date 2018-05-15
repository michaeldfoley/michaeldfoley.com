<template>
  <div>
    <header-card url="https://github.com/fordhamumc/email-progress" title="Live Email Content" tags="Ruby/Sinatra,HTML,CSS/SASS,Heroku,AWS S3">
      <div id="pageImages" class="page-image">
        <img src="/img/fordhamnews.jpg" alt="Fordham News">
        <img src="/img/alumninews.jpg" alt="Alumni News">
        <img src="/img/event.jpg" alt="Event">
        <img src="/img/travel.jpg" alt="Travel">
      </div>
    </header-card>
    <main class="container" id="main">
      <section class="text tldr">
        <p>Built an application that scraped up-to-date giving data and injected the results into emails that were already in your inbox.</p>
      </section>
      <hr class="section--break">
      <section class="text">
        <h2>Brief</h2>
        <p>Fordham University was hosted its first giving day on April 5, 2017. The primary means of communication leading up to and during the event would be email. I was charged with coming up with a way to keep people engaged with the campaign and promote a sense of class and department competition.</p>
      </section>
      <section class="text">
        <h2>Metrics</h2>
        <p>A beta test was conducted during the previous November's #GivingTuesday, which gave us a baseline measurement using standard email communication. Engagement would be measured by comparing open rates and the effectiveness would be measured by comparing the percentage of gifts raised.</p>
      </section>
      <section class="text">
        <h2>Challenges/Solutions</h2>
        <p>Three times during the Giving Day we would be emailing our audience to update them on the progress of the campaign, announce new challenges, and encourage them to give. Inspired by the Litmus live twitter feed email, I decided to use and external style sheet and CSS pseudo-selectors to live-update the giving numbers so that the numbers were fresh regardless of when you opened the email. </p>
        <h3>Getting the data</h3>
        <p>The platform that was being used to collect the gifts did not have an API that I could use to get the data I needed. Therefore I used the Nokogiri web scraper to pull in the contents of the results page, and filter to the results that I needed. I then used those results to create an external css file that could be included in the email.</p>


        <h3>Fallback for less capable email clients</h3>
        <p>Unfortunately the support for advanced CSS techniques is spotty. Pseudo-selectors and external stylesheets pretty much only have support on iOS and Mac OS native mail clients. In order to serve the remaining mail clients, I also generated screenshots of the results which would be included in the email. Since empty divs were used to structure the content, the clients that did not support the non-advanced clients simply did not display any content in those empty divs and they collapsed. The external stylesheet included CSS to hide the fallback screenshots for the clients that could load the stylesheet and supported CSS pseudo-selectors.</p>

        <p>While it would have been simpler to rely solely on screenshots for all mail clients, using CSS for the clients that supported it meant fewer server requests and a smaller payload. It also allowed me to use other advanced CSS techniques such as animation, to further enhance the experience. Since the native iOS mail itself is the email client of choice for over 40% of our audience, serving those people an enhanced version of the email was worth the extra work.</p>


        <h3>Performance</h3>
        <p>In order to limit the amount of work that would need to be done by the server, the job of creating the css document and the fallback screenshots were not done per request, but instead a clock process was setup to run the job as a background worker every 10 seconds. This greatly reduced the amount of time it took to request the necessary files. I also set the program up to upload the generated css file and screenshots to AWS S3 storage ensuring our 100k+ recipients would not overload our server.</p>
      </section>
    </main>
    <next-project url="/working">Some Project</next-project>
  </div>
</template>

<script>
  /* global SplitText */
  import {TimelineLite, TweenLite, Sine} from 'gsap';
  import HeaderCard from '~/components/HeaderCard';
  import NextProject from '~/components/NextProject';
  import { mapGetters } from 'vuex';
  export default {
    head: {
      title: 'Email Templates'
    },
    components: {
      HeaderCard,
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
          this.open(this.$el);
        }
      }
    },
    methods: {
      open (el, done = () => {}) {
        let tl = new TimelineLite({onComplete: done});
        let spt = new SplitText('h1', {type: 'chars'});
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
            yPercent: 100,
            transformOrigin: '50% 50%',
            ease: Sine.easeOut
          }, 0.1, 'opening')
          .from('.next-project a', 0.5, {
            opacity: 0,
            yPercent: 100
          }, '-=0.5');
      }
    },
    transition: {
      mode: 'out-in',
      css: false,
      enter (el, done) {
        window.$nuxt.$children[0].open(el, done);
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
