<template>
    <component :is="$antIcons[type]" />
</template>

<script lang="ts">
import {
    defineComponent,
} from "vue";

export default defineComponent({
    name: "icon",
    props: {
        type: { type: String },
    }
})
</script>