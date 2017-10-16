<template>
  <div>
    <Navigation />
    <Trigger id="trigger" />
    <nuxt id="pageContent" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Trigger from '~/components/Trigger';
  import Navigation from '~/components/Navigation';
  export default {
    components: {
      Trigger,
      Navigation
    },
    computed: {
      ...mapGetters({
        isNavOpen: 'getNavOpen'
      })
    },
    methods: {
      hideNav () {
        console.log('hideNav');
        if (this.isNavOpen) {
          this.$store.commit('toggleNav', false);
        }
      }
    }
  };
</script>

<style lang="scss">
@import "~assets/_vars.scss";
main {
  background-image: linear-gradient(to bottom, #fff 90%, #f5f5f3);
  padding-bottom: 1rem;
}
.text {
  margin: 0 auto $section-break;
  max-width: $text-width;
}

.text h2 {
  color: #b5b5b7;
  font-size: 1em;
  text-transform: uppercase;
}

.tldr {
  font-size: 1.2em;
}

.section--break {
  margin-bottom: ($section-break - 1.5);
}

@include bp(sm) {
  .tldr {
    text-align: center;
  }
}
</style>
