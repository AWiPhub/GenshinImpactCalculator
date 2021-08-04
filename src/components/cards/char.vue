<template>
    <a-card
        :title="char.name"
        style="width: 300px"
    >
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
    </a-card>
</template>

<script lang="ts">
import {
    defineComponent,
} from "vue";

export default defineComponent({
    props: ["char"]
    // setup() {

    // }
})
</script>