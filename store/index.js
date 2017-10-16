import Vuex from 'vuex';

const store = () => new Vuex.Store({

  state: {
    isNavOpen: false,
    isTriggerOpen: false
  },
  mutations: {
    toggleNav (state, show) {
      state.isNavOpen = (typeof show === 'boolean') ? show : !state.isNavOpen;
    },
    toggleTrigger (state, show) {
      state.isTriggerOpen = (typeof show === 'boolean') ? show : !state.isTriggerOpen;
    }
  },
  getters: {
    getNavState: state => state.isNavOpen,
    getTriggerState: state => state.isTriggerOpen
  }
});

export default store;
