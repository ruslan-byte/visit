<template>
  <div class="relative">
    <swiper-container :autoplay="{ delay: 2000 }" loop>
      <swiper-slide>
        <img
          src="/images/slider/Slide1.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Slide2.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Slide3.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Slide4.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Ruslan.webp"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Slide5.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Slide6.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Slide7.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="/images/slider/Novoros.jpg"
          class="w-full h-121.25 object-cover brightness-80 md:h-103.5 2xl:h-124.5"
        />
      </swiper-slide>
    </swiper-container>
    <div class="top-1/2 absolute z-10 left-0 right-0 -translate-y-1/2">
      <div class="g-container">
        <h4
          class="mb-6 text-center uppercase font-medium 2xl:tracking-[0.25rem]"
        >
          Руслан и Анастасия
        </h4>
        <h1 class="text-center mb-6">Свадьба</h1>
        <p
          class="text-white text-center text-[1.0625rem] leading-6.75 md:leading-8 md:text-[1.25rem] 2xl:text-[1.5rem] 2xl:tracking-normal whitespace-nowrap"
        >
          Приглашаем вас<br class="min-[360px]:hidden" />
          разделить с нами этот <br class="md:hidden" />
          особенный день
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "ru",
  },
});
</script>
