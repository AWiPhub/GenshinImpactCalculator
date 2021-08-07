import { Module } from "vuex";
import { RootState } from ".."

export interface State {
    visible: boolean,
    selectedChar: {}
}

const Modal: Module<State, RootState> = {
    state: {
        visible: false,
        selectedChar: {},
    },

    mutations: {
        toggleModal(state) {
            state.visible = !state.visible;
        }
    },

    actions: {
        showModal({ state, commit }, payload) {
            console.log(payload);
            
            state.selectedChar = payload;
            commit("toggleModal");
        }
    },

    getters: {

    }
}

export default Modal;