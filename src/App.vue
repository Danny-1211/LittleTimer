<template>
  <HeaderLogo/>
  <router-view/>
</template>

<script>
import HeaderLogo from '@/components/headerLogo.vue';
export default {
  components: {
    HeaderLogo
  }
};
</script>

<style lang="scss">
@import "./assets/stylesheet/all";
  a{
    text-decoration: none;
  }
</style>
