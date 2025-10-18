<template>
  <header class="bg-gray-200 border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 md:px-8 h-20">
      
      <!-- COL 1: Logo -->
      <div class="flex items-center justify-start">
        <router-link to="/" class="flex items-center">
          <img
            src="../../assets/images/logo-dunderstore.png"
            alt="Dunder Store"
            class="h-16 md:h-20 w-auto object-contain"
          />
        </router-link>
      </div>

      <!-- COL 2: Navegação com dropdown -->
      <nav class="hidden md:flex justify-center items-center gap-14 text-base font-medium text-gray-800 relative">
        <div
          v-for="categoria in categorias"
          :key="categoria.id || categoria.nome"
          class="relative group"
        >
          <router-link
            :to="`/categoria/${categoria.nome}`"
            class="hover:text-indigo-600 transition-colors duration-200"
          >
            {{ categoria.nome }}
          </router-link>

          <!-- Dropdown -->
          <div
            v-if="categoria.subcategorias && categoria.subcategorias.length"
            class="absolute left-0 top-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:translate-y-1 p-4 w-56"
          >
            <ul class="flex flex-col gap-2">
              <li v-for="sub in categoria.subcategorias" :key="sub.id || sub.nome">
                <router-link
                  :to="`/categoria/${categoria.nome}/${sub.nome}`"
                  class="block text-gray-600 hover:text-indigo-600"
                >
                  {{ sub.nome }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- COL 3: Ações -->
      <div class="flex justify-end items-center gap-3">
        <router-link
          to="/login"
          class="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition"
        >
          Entrar
        </router-link>

        <router-link
          to="/carrinho"
          class="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-[#141A7C] rounded-md hover:bg-indigo-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25A2.25 2.25 0 0 0 9 16.5h9.75a2.25 2.25 0 0 0 2.212-1.791l1.263-7.043A1.125 1.125 0 0 0 21.113 6H5.106m0 0L4.5 3.75M9 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm10.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span>Carrinho</span>
        </router-link>
        <router-link to="/admin/login"> <span>Admin</span></router-link>
       
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categorias = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('https://localhost:7136/api/Categoria') // endpoint do backend que retorna categorias
    categorias.value = response.data
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
  }
})
</script>
