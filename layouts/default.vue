<script lang="ts" setup>
  import Header from "@/components/molecules/header/index.vue"
  import Footer from "@/components/molecules/footer/index.vue"
</script>
<template>
  <div>
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>