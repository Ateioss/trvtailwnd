<script setup>
defineProps(['title','subTitle','classTitle','classSubTitle'])
</script>

<template>
  <h1 :class="classTitle">
    {{ title }}
  </h1>
  <p :class="classSubTitle">
    {{ subTitle }}
  </p>
</template>

<script>
export default {
  name: "TitleDocument"
}
</script>

<style scoped>

</style>