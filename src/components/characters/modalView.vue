<template>
    <a-modal
        v-model:visible="visible"
        :title="charName"
        @ok="handleOk"
        centered
        width="1000px"
    >
        

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
        const selectedChar = computed(() => store.state.Modal.selectedChar);
        const charName = computed(() => selectedChar.value.name)
        
        const visible = computed(() => store.state.Modal.visible);

        function handleCancel() {
            store.dispatch("showModal", {});
        }

        return {
            visible,
            handleCancel,
            charName
        }

    }
});
</script>