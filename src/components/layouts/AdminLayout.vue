<template>
  <div class="admin-layout flex h-screen">
    <SidebarAdminComponent/>
    <div class="flex flex-col flex-1">
      <NavbarAdminComponent />
      <main class="p-4 bg-gray-50 flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import NavbarAdminComponent from "../admin/NavbarAdminComponent.vue";
import SidebarAdminComponent from "../admin/SidebarAdminComponent.vue"
</script>
