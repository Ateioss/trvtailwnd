
<script setup>
defineProps([])
</script>

<template>
  <div class="absolute w-[193px] h-[22px] left-[1169px] top-[2375px] flex flex-row justify-center items-center gap-[24px]"
       style="padding: 0px 0px 0px 4px;">
    <p class="w-[10px] h-[22px] text-[24px] font-Poppins not-italic font-semibold text-center text-[#FF6A60] leading-[18px]">1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>...</p>
    <p>8</p>
  </div>
  <div class="absolute w-[36px] h-[36px] left-[1162px] top-[2368px] rounded-[50%]"
        style="box-sizing: border-box;position: absolute; border: 3px solid #FF6A60;">
  </div>

</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped>

</style>