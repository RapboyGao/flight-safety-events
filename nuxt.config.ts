import { defineNuxtConfig } from "nuxt/config";
import config from "./config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...config,

  devtools: {
    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/icon", "@nuxt/ui"],
});
