<template>
  <NavMenu></NavMenu>
  <div class="flex">
    <SideBarMenu></SideBarMenu>
    <EventsTable></EventsTable>
  </div>
</template>

<script setup lang="ts">
import type { TestResponse } from "@/composables/api";
const response = ref<TestResponse | undefined>();

const date = computed(() => {
  const time = response.value?.time;
  if (time) {
    return new Date(time);
  } else {
    return undefined;
  }
});

useSeoMeta({
  title: "Hello World",
  applicationName: "Hello World",
});

onMounted(async () => {
  response.value = (await myApi.testPost()).data;
});
// const response = 1;
</script>

<style lang="scss">
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
