<script setup>
defineProps(['title','classButton','classText', 'styles'])
</script>

<template>
  <div :class="classButton" :style="styles">
    <p :class="classText">
      {{title}}
    </p>
  </div>
</template>

<script>
export default {
  name: "FrameButton"
}
</script>

<style scoped>

</style>