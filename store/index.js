import Vuex from 'vuex';

const store = () => new Vuex.Store({

  state: {
    isNavOpen: false,
    isTriggerOpen: false,
    isOpening: true,
    cardImages: {}
  },
  mutations: {
    addCard (state, card) {
      if (!card['id']) return;
      state.cardImages[card.id] = card.images;
    },
    reorderCard (state, card) {
      if (!card['cardId'] || !card['index'] || !state.cardImages[card.cardId]) return;
      let images = state.cardImages[card.cardId];
      images.push(images.splice(card.index, 1)[0]);
      console.log(state.cardImages);
    },
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
    getCardImages: state => state.cardImages,
    getCardImagesById: state => id => state.cardImages[id],
    getNavState: state => state.isNavOpen,
    getTriggerState: state => state.isTriggerOpen,
    getOpeningState: state => state.isOpening
  }
});

export default store;
