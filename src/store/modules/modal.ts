import { Module } from "vuex";
import { RootState } from ".."

export interface State {
    visible: boolean,
    selectedChar: {},
    selectedWeapon: {}
}

const Modal: Module<State, RootState> = {
    state: {
        visible: false,
        selectedChar: {},
        selectedWeapon: {},
    },

    mutations: {
        toggleModal(state) {
            state.visible = !state.visible;
        }
    },

    actions: {
        showModal({ state, commit }, payload) {
            if (payload.element) state.selectedChar = payload
            else state.selectedWeapon = payload;
            commit("toggleModal");
        },
        closeModal({ commit }) {
            commit("toggleModal");
        }
    },

    getters: {

    }
}

export default Modal;