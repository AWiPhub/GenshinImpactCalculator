<template>
    <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="false"
        :rowSpan="4"
        size="small"
    >
        <template #standart="{ text }">
            <span>{{ text }}</span>
        </template>
        <template #material="{ text }">
            <span v-if="text !== null">
                <span
                    v-for="(item, index) in text"
                    :key="item + index"
                >
                    <a-row>
                    {{ item.name }} x{{ item.need }}
                    </a-row>
                </span>
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
        
        const selectedWeapon = computed(() => store.state.Modal.selectedWeapon);
        const columns = computed(() => selectedWeapon.value.aboutCharTabs.statProgression.columns);
        const dataSource = computed(() => selectedWeapon.value.aboutCharTabs.statProgression.dataSource);

        console.log(columns);
        console.log(dataSource);

        return {
            columns,
            dataSource,
        }
    }
});
</script>