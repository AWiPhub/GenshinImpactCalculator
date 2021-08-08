<template>
    <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
        size="small"
    >
        <template #standart="{ text }">
            <span>{{ text }}</span>
        </template>
        <template #footer>
            <a-row><span>Характеристика "Атака" дана без учёта показателя АТК оружия</span></a-row>
            <a-row><span>Персонаж получает специализированную характеристику начиная с Фазы возвышения 2</span></a-row>
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
        const columns = computed(() => selectedChar.value.aboutCharTabs.basicCharacteristics.columns);
        const dataSource = computed(() => selectedChar.value.aboutCharTabs.basicCharacteristics.dataSource);

        return {
            columns,
            dataSource,
        }
    }
});
</script>