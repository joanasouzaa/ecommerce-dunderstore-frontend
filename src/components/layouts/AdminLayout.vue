<template>
  <div class="admin-layout flex h-screen">
      <NavbarAdminComponent />
      <main class="p-4 bg-gray-50 flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
</template>

<script setup>
import NavbarAdminComponent from "../admin/NavbarAdminComponent.vue";
</script>
