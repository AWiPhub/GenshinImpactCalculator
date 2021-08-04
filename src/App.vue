<template>
  <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout style="background: #0f253b;" :style="{ marginLeft: '200px', marginBottom: '48px' }">
      <a-layout-content style="margin: 16px">
        <router-view />
      </a-layout-content>
      <Footer style="background: #001529; height: 48px" :style="{ position: 'fixed', bottom: '0', width: 'calc(100% - 200px)' }" />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Sider from "./components/main/sider/sider.vue"
import Footer from "./components/main/footer.vue"

import {
  defineComponent,
} from "vue";

export default defineComponent({
  components: {
    Sider,
    Footer,
  }
})
</script>

<style lang="scss">
@font-face {
  font-family: "GenshinFont"; 
  src: url("assets/Genshin_Impact.ttf") format("truetype"); 
}
span {
  font-family: GenshinFont;
}
</style>
