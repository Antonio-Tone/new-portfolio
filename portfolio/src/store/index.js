import { createStore } from 'vuex'

export default createStore({
  state: {
    lenis: null,
  },
  getters: {
  },
  mutations: {
    createLenis(state){
      state.lenis = new Lenis({
        lerp: 0.1,
      });
    },
    renderLenis(state, time) {
      state.lenis.raf(time);
    },
    },
  actions: {
    initializeApp({ commit }) {
      commit('createLenis');
      requestAnimationFrame((time) => {
        commit('renderLenis', time);
      });
    },
  },
  modules: {
  }
})
