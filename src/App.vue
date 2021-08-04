<template>
  <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Sider from "./components/main/sider.vue"
import Header from "./components/main/header.vue"
import Footer from "./components/main/footer.vue"

import {
  defineComponent,
} from "vue";

export default defineComponent({
  components: {
    Sider,
    Header,
    Footer,
  }
})
</script>

<style lang="scss">

</style>
