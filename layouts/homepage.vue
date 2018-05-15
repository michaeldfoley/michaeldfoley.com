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
