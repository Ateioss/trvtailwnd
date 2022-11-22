<script setup>
defineProps(['title','info1','info2','info3'])
</script>
<template>

  <p class="text-white opacity-30 font-Poppins not-italic font-semibold">{{title}}</p>
  <div class="mt-3.5 flex w-[100%] flex-col gap-2.5">
    <p class="text-white font-Poppins not-italic font-semibold text-sm leading-[22px]">
      {{ info1 }}
    </p>
    <p class="text-white font-Poppins not-italic font-semibold text-sm leading-[22px]">
      {{ info2 }}
    </p>
    <p class="text-white font-Poppins not-italic font-semibold text-sm leading-[22px]">
      {{ info3 }}
    </p>
  </div>


</template>

<script>
export default {
  name: "Information"
}
</script>

<style scoped>

</style>