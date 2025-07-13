<template>
  <UNavigationMenu highlight highlight-color="primary" orientation="vertical" :items="items" class="w-48" />
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const typesOfAircraft: NavigationMenuItem[] = [
  {
    label: "Airbus A320",
    icon: "i-lucide-plane",
  },
  {
    label: "Boeing 737",
    icon: "i-lucide-plane",
  },
  {
    label: "Boeing 777",
    icon: "i-lucide-plane",
  },
];

const items = ref<NavigationMenuItem[]>([
  {
    label: "人为因素",
    icon: "i-lucide-user",
    children: typesOfAircraft,
  },
  {
    label: "飞机因素",
    icon: "i-lucide-plane",
    children: typesOfAircraft,
  },
  {
    label: "环境因素",
    icon: "i-lucide-sun",
    children: typesOfAircraft,
  },
]);
</script>
<style lang="scss" scoped>
.w-48 {
  width: 12rem; /* 48 * 0.25rem */
}
</style>
