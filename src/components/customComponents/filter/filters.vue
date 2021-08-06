<template>
    <a-select
        v-for="filter in filters"
        :key="filter.filterType + filter.name"
        v-model:value="filter.value"
        :style="{ width: filter.width+'px' }"
        :placeholder="filter.placeholder"
        ref="select"
        @change="handleChange"
    >
        <a-select-option
            v-for="option in filter.options"
            :key="option"
            :value="option"
        >
            {{ option }}
        </a-select-option>
    </a-select>
</template>

<script lang="ts">
import { filter } from "@/components/customComponents/filter/filters"

import { useRouter } from "vue-router"

import {
    computed,
    defineComponent,
} from "vue";

export default defineComponent({
    setup() {
        const router = useRouter();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function findFilter(page: any) {
            const pageName = (page.charAt(0).toLowerCase() + page.slice(1));
            return filter.findIndex(filter => filter.type == pageName)
        }

        const name = computed(() => router.currentRoute.value.name)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const getFilter = computed(() => name.value + "Filter")

        const filters = filter[findFilter(router.currentRoute.value.name)].getFilter;

        console.log(filters);

        return {
            filters,
        }
    }
})
</script>