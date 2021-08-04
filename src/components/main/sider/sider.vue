<template>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed' }"
    >
        <img
            src="../../../assets/images/Genshin_Impact_logo.svg.png"
            alt="logo"
            class=""
            :style="{
                width: '90%',
                margin: '20px 5%',
                filter: 'invert(100%)'
            }"
        >
        <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
            <router-link
                v-for="item in menu"
                :key="item.key"
                :to="item.redirectTo"
            >
                <a-menu-item
                    :key="item.key"
                    :disabled="item.disabled"
                >
                    <Icon :type="item.icon" />
                    <span>{{ item.name }}</span>
                </a-menu-item>
            </router-link>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import Icon from "@/components/customComponents/icon.vue"
import { siderMenu } from "./menu"

import {
    defineComponent,
    ref,
} from "vue";

export default defineComponent({
    components: {
        Icon,
    },
    setup() {
        const collapsed = ref<boolean>(false);
        const selectedKeys = ref<string[]>([]);
        const menu = siderMenu;

        return {
            collapsed,
            selectedKeys,
            menu,
        }
    },
})
</script>