<template>
  <component :is="container" class="card" :id="id">
    <component :is="heading" class="heading">{{title}}</component>
    <div class="screenshots-container">
      <div class="screenshot" v-for="image in cardImages" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <img :src="image.src" :alt="image.alt" @click="reorder" />
      </div>
    </div>
    <ul class="meta-tags">
      <li v-for="tag in tagList">{{tag}}</li>
    </ul>
    <nuxt-link :to="link" class="btn" :aria-label="ariaLabel"><span>View the Case Study</span></nuxt-link>
  </component>
</template>
<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex';
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
    beforeMount () {
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
        xPercent: 50,
        yPercent: -10,
        z: 100,
        opacity: 0
      }, {
        opacity: 1,
        cycle: {
          x: (i) => i * 40,
          y: (i) => 40 * (this.cardImages.length - i - 1),
          z: (i) => i * 20,
          ease: Sine.easeOut
        }
      }, '0.1');
    },
    methods: {
      ...mapMutations([
        'addCard'
      ]),
      ...mapActions([
        'reorderImages'
      ]),
      mouseEnter (event) {
        if (this.animating) return;
        let tl = new TimelineLite();
        tl.to(event.target, 0.1, {
          xPercent: '-=1'
        });
      },
      mouseLeave (event) {
        if (this.animating) return;
        let tl = new TimelineLite();
        tl.to(event.target, 0.1, {
          xPercent: 50
        });
      },
      moveImages (prevPosition) {
        let len = this.cardImages.length;
        if (prevPosition === len - 1) return;
        this.animating = true;
        let shuffle = [...document.querySelectorAll('.screenshot')].slice(prevPosition - len);
        let topImage = shuffle.shift();
        let shuffleOffset = len - shuffle.length - 1;
        let tl = new TimelineLite({
          onComplete: () => { this.animating = false; }
        });
        tl.add('start')
          .to(topImage, 0.2, {
            xPercent: '-=100',
            ease: Sine.easeOut,
            onComplete: function () { this.target.parentNode.appendChild(this.target); }
          })
          .to(topImage, 0.2, {
            xPercent: 50,
            x: (len - 1) * 40,
            y: 0,
            z: (len - 1) * 20,
            ease: Sine.easeOut
          })
          .staggerTo(shuffle, 0.2, {
            cycle: {
              x: (i) => (i + shuffleOffset) * 40,
              y: (i) => 40 * (shuffle.length - i),
              z: (i) => (i + shuffleOffset) * 20,
              ease: Sine.easeOut
            }
          }, 0.1, 'start+=0.2');
      },
      reorder (event) {
        if (this.animating) return;
        this.reorderImages({
          cardId: this.id,
          src: event.target.getAttribute('src')
        }).then(this.moveImages);
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .screenshots-container {
    display: flex;
    position: relative;
    height: 70vh;
  }
  .screenshot + .screenshot {
    margin-left: 2rem;
  }
  .screenshot {
    width: 40vh;
    height: 50vh;
    overflow: hidden;
    box-shadow: -5px 5px 10px rgba(0,0,0,0.2);

    img {
      width: 100%;
    }
  }

</style>
