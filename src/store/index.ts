import { createStore, Module } from 'vuex'

import Modal from "./modules/modal"

export interface RootState {
  // GlobalState
}

export default createStore<RootState>({
  modules: {
    Modal,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
})
