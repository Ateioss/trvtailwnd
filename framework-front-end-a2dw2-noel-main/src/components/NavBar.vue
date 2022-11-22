
<script setup>
defineProps(['navBarClass','item1', 'item2', 'item3', 'item4','nameItem1','nameItem2','nameItem3','nameItem4'])
</script>
<template>
  <div :style="navBarClass">
    <p :style="item1">
      {{nameItem1}}
    </p>
    <p :style="item2">
      {{nameItem2}}
    </p>
    <p :style="item3">
      {{nameItem3}}
    </p>
    <p :style="item4">
      {{nameItem4}}
    </p>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>