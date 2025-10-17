<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import ClientLayout from "../src/components/layouts/ClientLayout.vue";
import AdminLayout from "../src/components/layouts/AdminLayout.vue";

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout === "admin" ? AdminLayout : ClientLayout;
});
</script>