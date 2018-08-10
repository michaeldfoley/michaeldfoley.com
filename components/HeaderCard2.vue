<template>
  <component :is="container" class="card container" :id="id">
    <component :is="heading" class="heading">{{title}}</component>
    <div class="screenshots-container">
      <div class="screenshot" v-for="image in cardImages" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="reorder">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <div class="description">
      <slot></slot>
    </div>
    <ul class="meta-tags">
      <li v-for="tag in tagList">{{tag}}</li>
    </ul>
    <div class="cta">
      <nuxt-link :to="link" class="btn" :aria-label="ariaLabel"><span>View the Case Study</span></nuxt-link>
    </div>
  </component>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import {TimelineLite, Sine} from 'gsap';
  if (process.browser) {
    require('~/plugins/DrawSVGPlugin');
  }
  export default {
    data () {
      return {
        animating: false
      };
    },
    props: {
      id: String,
      link: String,
      tags: String,
      title: String,
      images: Array,
      heading: {
        default: 'h1',
        type: String
      },
      container: {
        default: 'section',
        type: String
      }
    },
    computed: {
      ...mapGetters([
        'getCardImagesById',
        'getCardImages'
      ]),
      tagList () {
        return this.tags.split(',');
      },
      ariaLabel () {
        return 'View the ' + this.title + ' case study.';
      },
      cardImages () {
        return this.getCardImagesById(this.id);
      }
    },
    created () {
      if (this.getCardImagesById(this.id)) return;
      this.addCard({
        id: this.id,
        images: this.images
      });
    },
    mounted () {
      this.animating = true;
      let tl = new TimelineLite({
        onComplete: () => { this.animating = false; }
      });
      tl.staggerFromTo('.screenshot', 0.3, {
        transformPerspective: 1000,
        perspective: 500,
        transformStyle: 'preserve-3d',
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0,
        rotationX: 30,
        rotationY: 10,
        rotationZ: -10,
        z: 100,
        opacity: 0
      }, {
        opacity: 1,
        cycle: {
          xPercent: (i) => i * 15,
          yPercent: (i) => 10 * (this.cardImages.length - i - 1),
          z: (i) => i * 20,
          ease: Sine.easeOut
        }
      }, '0.1');
    },
    methods: {
      ...mapMutations([
        'addCard',
        'reorderCard'
      ]),
      mouseEnter (event) {
        if (this.animating) return;
        let tl = new TimelineLite();
        tl.to(event.target, 0.1, {
          x: -5
        });
      },
      mouseLeave (event) {
        if (this.animating) return;
        let tl = new TimelineLite();
        tl.to(event.target, 0.1, {
          x: 0
        });
      },
      reorder ({target}) {
        let images = [...document.querySelectorAll('.screenshot')];
        let prevPosition = images.indexOf(target.parentNode);
        if (prevPosition === images.length - 1) return;
        this.animating = true;
        let shuffle = images.slice(prevPosition - images.length);
        let topImage = shuffle.shift();
        let shuffleOffset = images.length - shuffle.length - 1;
        let tl = new TimelineLite({
          onComplete: () => {
            this.animating = false;
            this.reorderCard({
              cardId: this.id,
              index: prevPosition
            });
          }
        });
        tl.add('start')
          .to(topImage, 0.2, {
            xPercent: '-=100',
            ease: Sine.easeOut,
            onComplete: function () { this.target.parentNode.appendChild(this.target); }
          })
          .to(topImage, 0.2, {
            xPercent: (images.length - 1) * 15,
            yPercent: 0,
            z: (images.length - 1) * 20,
            ease: Sine.easeOut
          })
          .staggerTo(shuffle, 0.2, {
            cycle: {
              xPercent: (i) => (i + shuffleOffset) * 15,
              yPercent: (i) => 10 * (shuffle.length - i),
              z: (i) => (i + shuffleOffset) * 20,
              ease: Sine.easeOut
            }
          }, 0.1, 'start+=0.2');
      }/* ,
      reorder (event) {
        if (this.animating) return;
        this.moveImages(event.target);
        this.reorderImages({
          cardId: this.id,
          src: event.target.getAttribute('src')
        }).then();
      } */
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .card {
    display: grid;
    grid-template-columns: max-content 50vw;
    grid-template-rows: 1fr min-content min-content 1fr 10rem;
    grid-column-gap: 10rem;
  }
  .screenshots-container {
    display: flex;
    position: relative;
    height: 45vw;
    grid-column: 2;
    grid-row: 1 / -1;
    align-self: center;
  }
  .screenshot + .screenshot {
    margin-left: 2rem;
  }
  .screenshot {
    width: 25vw;
    height: 32vw;
    max-width: 30vw;
    overflow: hidden;
    box-shadow: -5px 5px 10px rgba(0,0,0,0.2);

    img {
      width: 100%;
    }
  }

  .heading {
    font-weight: 800;
    font-size: 3em;
    align-self: end;
  }

  .description {
    font-size: 1.5em;
  }

  .cta {
    align-self: end;
  }

</style>
