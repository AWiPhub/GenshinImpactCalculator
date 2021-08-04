<template>
    <a-layout-footer style="text-align: center">
        <a href="https://github.com/AWiPhub/GenshinImpactCalculator">
            <Icon type="GithubOutlined" />
            <span>GitHub</span>
        </a>
    </a-layout-footer>
</template>

<script lang="ts">
import Icon from "@/components/customComponents/icon.vue"

import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Icon
    }
})
</script>

<style lang="scss" scoped>
span {
    margin-left: 5px;
}
.ant-layout-footer {
    padding: 14px 50px;
    background: #002140 !important;
}
</style>