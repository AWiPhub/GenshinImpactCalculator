<template>
    <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
        size="middle"
    >
        <template #standart="{ text }">
            <span>{{ text }}</span>
        </template>
        <template #material="{ text }">
            <span v-if="text">
                {{ text.name }} x{{ text.need }}
            </span>
            <span
                v-else
                :style="{ color: 'rgba(0, 0, 0, .4)', textAlign: 'center' }"
            >
                Отсутствует
            </span>
        </template>
    </a-table>
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
        const columns = computed(() => selectedChar.value.aboutCharTabs.ascension.columns);
        const dataSource = computed(() => selectedChar.value.aboutCharTabs.ascension.dataSource);

        return {
            columns,
            dataSource,
        }
    }
});
</script>