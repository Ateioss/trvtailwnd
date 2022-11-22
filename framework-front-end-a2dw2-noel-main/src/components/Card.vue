
<script setup>
defineProps(['title', 'message', 'urlImg', 'urlImg1', 'urlImg2', 'urlImg3', 'subtitle'])
</script>

<template>
  <!-- mo:w-[342px] mo:h-[355px]  -->
  <div class="bg-white flex flex-col relative w-[298px] h-[355px] bg-white rounded-[20px]" style="box-shadow: 2px 8px 30px rgba(37, 33, 32, 0.06);">
    <div class="w-[298px] h:[190px]"> <!-- mo:w-[342px] mo:h-[190px] -->
      <img :src="urlImg" style="border-top-left-radius: 20px 20px; border-top-right-radius: 20px 20px;">
    </div>
    <div class="flex flex-col items-start p-0 absolute w-[298px] h-[140px] mo:w-[295px] mo:h-[144px] left-[16px] top-[206px]">
        <p class="w-[200px] h-[18px] font-Poppins font-normal not-italic text-[10px] leading-[18px] text-mColor2 uppercase">
          {{subtitle}}
        </p>
        <div class="flex flex-col items-start gap-[24px] w-[295px] h-[120px] " style="padding: 0px 0px 10px;gap: 24px;">
            <p class="w-[266px] mo:w-[295px] h-[44px] font-Poppins not-italic font-semibold text-base leading-[22px] text-mColor2" >
              {{title}}
            </p>
            <div class="flex flex-row items-center p-0 gap-2 w-[148px] h-[44px]">
                <div v-if="urlImg1" class="w-[44px] h-[44px] rounded-[50%] relative" style="border: 1px solid #FF6A60;">
                  <img class="w-[31px] h-[31px] absolute left-[6px] top-[3px] rounded-[50%]" :src="urlImg1">
                </div>
                <div v-if="urlImg2" class="w-[44px] h-[44px] rounded-[50%] relative" style="border: 1px solid #FF6A60;">
                  <img class="w-[31px] h-[31px] absolute left-[6px] top-[3px] rounded-[50%]" :src="urlImg2">
                </div>
                <div v-if="urlImg3" class="w-[44px] h-[44px] rounded-[50%] relative" style="border: 1px solid #FF6A60;">
                  <img class="w-[31px] h-[31px] absolute left-[6px] top-[3px] rounded-[50%]" :src="urlImg3">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
