<template>
    <section class="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <!-- Título e quantidade de produtos -->
        <header class="mb-10">
            <h1 class="text-3xl font-bold text-gray-900 mb-1">
                Categoria: {{ categoriaNome }}
            </h1>
            <p class="text-gray-500 text-sm">
                {{ produtos.length }} produto{{ produtos.length !== 1 ? 's' : '' }} encontrados
            </p>
        </header>

        <!-- Lista de produtos -->
        <router-link to="/produto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div v-for="produto in produtos" :key="produto.id"
                    class="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                    <img :src="produto.imagem" :alt="produto.nome" class="w-full h-56 object-cover" />

                    <div class="p-4 flex flex-col justify-between">
                        <div>
                            <h2 class="text-lg font-semibold text-gray-800">{{ produto.nome }}</h2>
                            <p class="text-indigo-700 font-bold mt-1">
                                R$ {{ produto.preco.toFixed(2).replace('.', ',') }}
                                <span class="text-sm text-gray-500 line-through ml-1">
                                    R$ {{ produto.precoAntigo.toFixed(2).replace('.', ',') }}
                                </span>
                            </p>
                        </div>

                        <AddtToCartButton />
                    </div>
                </div>
            </div>
        </router-link>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AddtToCartButton from '../../components/public/AddtToCartButton.vue'

// pegando o nome da categoria da URL
const route = useRoute()
const categoriaNome = computed(() => decodeURIComponent(route.params.nome))

// Mock de produtos
const produtos = ref([
    {
        id: 1,
        nome: 'Salto Scarpin',
        preco: 299.99,
        precoAntigo: 359.99,
        imagem: 'https://cdn-icons-png.flaticon.com/512/3670/3670098.png',
        categoria: 'Teste 1'
    },
    {
        id: 2,
        nome: 'Salto Scarpin',
        preco: 299.99,
        precoAntigo: 359.99,
        imagem: 'https://cdn-icons-png.flaticon.com/512/3670/3670098.png',
        categoria: 'Teste 2'
    },
    {
        id: 3,
        nome: 'Salto Scarpin',
        preco: 299.99,
        precoAntigo: 359.99,
        imagem: 'https://cdn-icons-png.flaticon.com/512/3670/3670098.png',
        categoria: 'Teste 1'
    },
    {
        id: 4,
        nome: 'Salto Scarpin',
        preco: 299.99,
        precoAntigo: 359.99,
        imagem: 'https://cdn-icons-png.flaticon.com/512/3670/3670098.png',
        categoria: 'Teste 3'
    }
])

// Filtrando produtos pela categoria atual
const produtosFiltrados = computed(() =>
    produtos.value.filter(p => p.categoria === categoriaNome.value)
)

// substitui o array original pelo filtrado
if (produtosFiltrados.value.length > 0) {
    produtos.value = produtosFiltrados.value
}
</script>

<style scoped>
/* estilo opcional para hover suave nos cards */
</style>
