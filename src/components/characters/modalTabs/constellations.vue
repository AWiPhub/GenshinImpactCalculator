<template>
    <a-descriptions layout="vertical" bordered>
        <a-descriptions-item
            v-for="(constellation, index) in constellations"
            :key="constellation[index]"
        >
            <template #label>
                <a-row type="flex" justify="center">
                    <span :style="{ textAlign: 'center' }">{{ constellation.name }}</span>
                </a-row>
                <a-row type="flex" justify="center">
                    <span :style="{ color: 'rgba(0, 0, 0, .4)', textAlign: 'center' }">Уровень: {{ constellation.level }}</span>
                </a-row>
            </template>
            <a-row><span>{{ constellation.effect }}</span></a-row>
            <br v-if="constellation.additional && constellation.effect">
            <a-row v-if="constellation.additional">
                <span>{{ constellation.additional }}</span>
            </a-row>
        </a-descriptions-item>
    </a-descriptions>
</template>

<script lang="ts">
import { useStore } from "vuex";

import {
    computed,
    defineComponent
} from 'vue';

export default defineComponent({
    setup() {
        const store = useStore();
        const selectedChar = computed(() => store.state.Modal.selectedChar);
        const constellations = computed(() => selectedChar.value.aboutCharTabs.constellations);

        return {
            constellations,
        }

    }
});
</script>