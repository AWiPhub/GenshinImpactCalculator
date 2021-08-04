<template>
    <a-row type="flex" justify="center">
        <Card
            v-for="char in dbCharacters"
            :key="char.key"
            :char="char"
        />
    </a-row>
</template>

<script lang="ts">
import { characters } from "@/components/dataBase/characters"
import Card from "@/components/cards/char.vue"

import {
    defineComponent,
} from "vue";

export default defineComponent({
    components: {
        Card,
    },
    setup() {
        const dbCharacters = characters;

        return {
            dbCharacters,
        }
    }
})
</script>