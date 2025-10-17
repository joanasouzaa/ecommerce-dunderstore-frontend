<template>
  <div class="client-layout">
    <!-- Navbar -->
    <NavbarStoreComponent />

    <!-- Conteúdo principal -->
    <main class="client-main">
      <slot />
    </main>

    <!-- Rodapé -->
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarStoreComponent from '../public/NavbarStoreComponent.vue'
</script>

<style scoped>
.client-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Espaço para compensar a navbar sticky */
.client-main {
  flex: 1;
  background-color: #fafafa;
  padding-top: 4.5rem; /* equivalente a navbar h-18 */
}
</style>
