<template>
    <a-modal
        v-model:visible="visible"
        @ok="handleOk"
        centered
        width="75%"
        wrapClassName="full-modal"
    >
        <a-tabs v-model:activeKey="activeTab" @change="getTabComponent(activeTab)">
            <a-tab-pane
                v-for="tab in tabs"
                :key="tab.key"
                :tab="tab.tabName"
            >
                <component
                    :is="getTabComponent(tab.key)"
                    :style="{ overflow: 'auto', maxHeight: '68vh' }"
                />
            </a-tab-pane>
        </a-tabs>
        <template #footer>
            <a-button key="back" @click="handleCancel">Закрыть</a-button>
        </template>
    </a-modal>
</template>

<script lang="ts">
import overview from "./modalTabs/overview.vue"
import ascension from "./modalTabs/ascension.vue"

import { useStore } from "vuex";

import {
    computed,
    ref,
    defineComponent,
    watch
} from 'vue';

export default defineComponent({
    components: {
        overview,
        ascension
    },
    setup() {
        const store = useStore();
        const selectedChar = computed(() => store.state.Modal.selectedChar);
        const charName = computed(() => selectedChar.value.name)

        const activeTab = ref("1");

        const selectedTab = computed(activeTab => getTabComponent(activeTab));

        function getTabComponent(activeTab: string) {
            if (activeTab == "1") return "overview"
            if (activeTab == "2") return "ascension"
        }
        
        const visible = computed(() => store.state.Modal.visible);

        const tabs = [
            { key: "1", tabName: "Обзор" },
            { key: "2", tabName: "Возвышение" }
        ]

        function handleCancel() {
            store.dispatch("closeModal");
        }

        watch(activeTab, (count, prevCount) => {
            getTabComponent(count);
        })

        return {
            visible,
            handleCancel,
            charName,
            tabs,
            activeTab,
            selectedTab,
            getTabComponent,
        }

    }
});
</script>

<style lang="scss">
.ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
}
.full-modal {
  .ant-modal {
    max-width: 75%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(85vh);
    max-height: calc(85vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>