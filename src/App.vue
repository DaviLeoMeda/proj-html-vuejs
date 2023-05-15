<script >
import HeaderComp from "./components/HeaderComp.vue"
import MainComp from "./components/MainComp.vue"
import FooterComp from "./components/FooterComp.vue"
import { store } from './store.js'


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp

  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <HeaderComp />
  <MainComp />
</template>

<style lang="scss">
@use './style/main.scss';
</style>
