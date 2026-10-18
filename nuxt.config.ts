import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/fonts", "nuxt-swiper", "@nuxt/image"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
