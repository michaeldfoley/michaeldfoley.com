import { mapGetters } from 'vuex';

export const opening = {
  computed: {
    ...mapGetters({
      isOpeningFinished: 'getOpeningState'
    })
  },
  watch: {
    isOpeningFinished (state) {
      if (state) {
        this.preroll();
      }
    }
  },
  methods: {
    preroll () {
    }
  }
};
