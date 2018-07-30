<template>
  <component :is="container" class="card">
    <component :is="heading" class="heading"><span v-for="word in titleSplit">{{word}} </span></component>
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="description">
      <ul class="meta-tags">
        <li v-for="tag in tagList">{{tag}}</li>
      </ul>
      <slot name="description"></slot>
      <nuxt-link :to="url" class="btn" v-if="nuxtLink" :aria-label="ariaLabel"><span>View the Case Study</span></nuxt-link>
      <a :href="url" class="btn" v-else-if="url"><span>{{buttonLabel}}</span></a>
    </div>
  </component>
</template>
<script>
  export default {
    props: {
      url: String,
      tags: String,
      title: String,
      heading: {
        default: 'h2',
        type: String
      },
      container: {
        default: 'section',
        type: String
      }
    },
    computed: {
      tagList () {
        return this.tags.split(',');
      },
      titleSplit () {
        return this.title.split(' ');
      },
      ariaLabel () {
        return 'View the ' + this.title + ' case study.';
      },
      nuxtLink () {
        let r = new RegExp('^(?:[a-z]+:)?//', 'i');
        return !r.test(this.url);
      },
      buttonLabel () {
        return (this.url && this.url.indexOf('//github.com') > -1) ? 'View on Github' : 'View the Project Website';
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~assets/_vars.scss";
  .card {
    overflow: hidden;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr minmax(auto, 50ch) 1fr;
    grid-template-rows: max-content max-content max-content auto;
    grid-gap: 1.5rem;

    @include bp(md) {
      grid-template-columns: 2fr minmax(auto, 50%) 1fr minmax(auto, 45ch) 2fr;
      grid-template-rows: 1fr max-content 1fr;
      grid-gap: 1rem 3rem;
    }
  }

  .heading {
    align-self: end;
    font-size: 2.5em;
    font-weight: 400;
    line-height: 1.2;
    grid-area: 2 / 2;
    margin: 0;

    @include bp(md) {
      font-size: 6vw;
      grid-row: 1;
      grid-column: 3 / 5;
    }

    @media screen and (min-width: 62.5rem) {
      font-size: 3.8em;
      text-align: right;
    }
  }

  .description {
    align-self: start;
    grid-row: 3;
    grid-column: 2;

    @include bp(md) {
      grid-area: 2 / 4;
    }
  }
  .image {
    height: 100%;
    grid-row: 1;
    grid-column: span 3;

    @include bp(md) {
      grid-row-end: -1;
      grid-column: 1 / 3;
    }
  }

  .image-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    padding: 2rem 0;

    @include bp(md) {
      justify-content: flex-end;
      padding: 0;
    }
  }
  .meta-tags {
    font-family: $font_head;
    font-size: 0.8em;
    list-style-type: none;
    margin: 0 -1.5rem 2rem;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 1.5rem;
  }

  .hidden {
    display: none;
    max-width: none;
    opacity: 0;
  }

  .btn {
    font-size: 0.8em;
    margin-top: 0.5em;
    padding: 1rem 3rem 0.7rem;
  }

  #working-emails .btn {
    @include btn-gradient(1px, #0B549F, #44beb6)
  }
</style>
