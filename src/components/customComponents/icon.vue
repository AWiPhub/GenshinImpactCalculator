<template>
    <component :is="icon" />
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    onMounted,
    watch,
} from "vue";

export default defineComponent({
    name: "icon",
    props: {
        type: { type: String },
    },
    setup(props) {
        const icon = ref();
        const initIcon = function({ type }) {
            import("@ant-design/icons-vue").then(modules => 
                icon.value = typeof type === "string" ? modules[type] : undefined
            )
        }
        watch(props, (val) => {
            initIcon(val);
        })
        onMounted(() => {
            initIcon(props);
        })
        return { icon }
    }
})
</script>