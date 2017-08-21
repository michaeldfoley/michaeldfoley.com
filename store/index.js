import Vuex from 'vuex';

const store = () => new Vuex.Store({

  state: {
    isNavOpen: false
  },
  mutations: {
    toggleNav (state) {
      state.isNavOpen = !state.isNavOpen;
    },
    closeNav (state) {
      state.isNavOpen = false;
    }
  },
  getters: {
    getNavOpen: state => state.isNavOpen
  }
});

export default store;
