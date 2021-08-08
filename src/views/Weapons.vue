<template>
    <ModalView />
    <!-- <Filters /> -->
    <a-row type="flex" justify="center">
        <Card
            v-for="weapon in dbWeapons"
            :key="weapon.key"
            :weapon="weapon"
            @click="showModal(weapon)"
        />
    </a-row>
</template>

<script lang="ts">
import { useStore } from "vuex";

import { weapons } from "@/components/dataBase/weapons"

import ModalView from "@/components/weapons/modalView.vue"
// import Filters from "@/components/customComponents/filter/filters.vue"
import Card from "@/components/cards/weapon.vue"

import { IWeapon } from "@/components/interfaces/IWeapon"

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
        const dbWeapons = weapons;

        function showModal(weapon: IWeapon) {
            store.dispatch("showModal", weapon)
        }

        return {
            dbWeapons,
            showModal
        }
    }
})
</script>