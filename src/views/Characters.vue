<template>
    <ModalView />
    <!-- <Filters /> -->
    <a-row type="flex" justify="center">
        <Card
            v-for="char in dbCharacters"
            :key="char.key"
            :char="char"
            @click="showModal(char.key)"
        />
    </a-row>
</template>

<script lang="ts">
import { useStore } from "vuex";

import { characters } from "@/components/dataBase/characters"

import ModalView from "@/components/characters/modalView.vue"
// import Filters from "@/components/customComponents/filter/filters.vue"
import Card from "@/components/cards/char.vue"

import {
    defineComponent,
} from "vue";

export default defineComponent({
    components: {
        ModalView,
        // Filters,
        Card,
    },
    setup() {
        const store = useStore();
        const dbCharacters = characters;

        function showModal() {
            store.dispatch("showModal")
        }

        return {
            dbCharacters,
            showModal
        }
    }
})
</script>