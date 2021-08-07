import { Module } from "vuex";
import { RootState } from ".."

export interface State {
    visible: boolean,
    key: number
}

const Modal: Module<State, RootState> = {
    state: {
        visible: false,
        key: null ?? 0,
    },

    mutations: {
        toggleModal(state) {
            state.visible = !state.visible;
        }
    },

    actions: {
        showModal({ commit }) {
            // state.key = payload.charKey;
            commit("toggleModal");
        }
    },

    getters: {

    }
}

export default Modal;