<template>
  <div>
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue';
  export default {
    components: {
      Navigation
    }
  };
</script>

<style lang="scss">
@import "~assets/_vars.scss";
.text {
  margin: 0 auto $section-break;
  max-width: $text-width;
}

h2 {
  font-size: 1em;
  text-transform: uppercase;
}

.title {
  margin-top: 0;
  text-align: center;
}

.meta {
  margin-bottom: 0;
  opacity: 0.8;
  text-align: center;
}
.meta-tags {
  display: block;
  font-family: $font_head;
  font-size: 0.8em;
  list-style-type: none;
  margin: 0 -1.5rem;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 1.5rem;
  }
}

.tldr {
  font-size: 1.2em;
}

.section--break {
  margin-bottom: ($section-break - 1.5);
}
.page-head {
  height: 100vmin;
  overflow: hidden;
  margin-bottom: $section-break;
}
.page-image img {
  max-width: 100%;
}

.headline {
  margin: 16px 70px 3rem;
}


@include bp(md) {
  .page-image,
  .headline {
    width: 50%;
  }

  .page-head {
    display: flex;
    align-items: center;
  }
}

@include bp(sm) {
  .page-head {
    margin-left: 70px;
    height: 50vmin;
  }
  .tldr {
    text-align: center;
  }
}
</style>
