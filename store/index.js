import Vuex from 'vuex';

const store = () => new Vuex.Store({

  state: {
    isNavOpen: false,
    isTriggerOpen: false,
    isOpening: true
  },
  mutations: {
    toggleNav (state, show) {
      state.isNavOpen = (typeof show === 'boolean') ? show : !state.isNavOpen;
    },
    toggleTrigger (state, show) {
      state.isTriggerOpen = (typeof show === 'boolean') ? show : !state.isTriggerOpen;
    },
    toggleOpening (state, show) {
      state.isOpening = (typeof show === 'boolean') ? show : !state.isOpening;
    }
  },
  getters: {
    getNavState: state => state.isNavOpen,
    getTriggerState: state => state.isTriggerOpen,
    getOpeningState: state => state.isOpening
  }
});

export default store;
