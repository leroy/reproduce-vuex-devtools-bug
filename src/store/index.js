import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	vnode: null,
  },
  mutations: {
  	['COMMIT_VNODE'](state, {vnode}) {
  		state.vnode = vnode;
    }
  },
  actions: {
  },
  modules: {
  }
})
