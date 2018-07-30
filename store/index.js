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
      card.images.push(card.images.splice(card.imageIndex, 1)[0]);
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
  actions: {
    reorderImages ({commit, state}, topImage) {
      if (!topImage['cardId'] || !topImage['src'] || !state.cardImages[topImage.cardId]) return;
      let images = state.cardImages[topImage.cardId];
      let imageIndex = images.findIndex(image => image.src === topImage.src);
      commit('reorderCard', {
        images: images,
        imageIndex: imageIndex
      });
      return imageIndex;
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
