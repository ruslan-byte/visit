<template>
  <div class="h-screen">
    <MainSlider></MainSlider>
    <AddressingGuests></AddressingGuests>
    <TimerSection></TimerSection>
    <ProgramSection></ProgramSection>
    <PlaceSection></PlaceSection>
    <OtherSection></OtherSection>
    <ConfirmationSection></ConfirmationSection>
    <div class="py-12 md:py-16 2xl:py-20 test">
      <h3 class="mb-6 2xl:mb-8 text-center">Спасибо за любовь</h3>
      <p class="text-center">С любовью, Руслан и Настя</p>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "ru",
  },
  link: [{ rel: "icon", href: "/visit/favicon.svg" }],
});
</script>
