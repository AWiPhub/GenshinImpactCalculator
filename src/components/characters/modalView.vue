<template>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>

        <template #footer>
            <a-button key="back" @click="handleCancel">Закрыть</a-button>
        </template>
    </a-modal>
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

        const visible = computed(() => store.state.Modal.visible);

        function handleCancel() {
            store.dispatch("showModal");
        }

        return {
            visible,
            handleCancel
        }

    }
});
</script>