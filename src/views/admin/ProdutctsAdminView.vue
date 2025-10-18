<template>
    <main class="flex-1 bg-[#F5F7FB] p-8">
      <header class="flex justify-between items-start mb-8">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Gestão de Produtos</h1>
          <p class="text-gray-500">Gerencie seu catálogo de produtos</p>
        </div>

        <div class="flex items-center space-x-3">
          <ViewStoreButton/>
          <NewProductButton/>
        </div>
      </header>

      <!-- Barra de busca e filtros -->
      <section
        class="bg-white rounded-lg p-4 flex flex-wrap justify-between items-center shadow-sm mb-8"
      >
        <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-gray-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar produto"
            class="outline-none w-full text-sm text-gray-700"
          />
        </div>

        <div class="flex space-x-3 mt-3 md:mt-0">
          <select
            class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white"
          >
            <option>Todas as categorias</option>
          </select>
          <select
            class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white"
          >
            <option>Todos os status</option>
          </select>
        </div>
      </section>

      <!-- Lista de produtos -->
      <section class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="font-semibold text-gray-900 mb-4">Produtos (4)</h2>

        <table class="w-full text-sm text-left text-gray-700">
          <thead class="text-gray-500 border-b text-md capitalize">
            <tr>
              <th class="pb-3 font-medium">Produto</th>
              <th class="pb-3 font-medium">Categoria</th>
              <th class="pb-3 font-medium">Preço</th>
              <th class="pb-3 font-medium">Estoque</th>
              <th class="pb-3 font-medium">Status</th>
              <th class="pb-3 font-medium text-center">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(produto, index) in produtos" :key="index" class="hover:bg-gray-50">
              <td class="py-3 flex items-center gap-3">
                <img
                  :src="produto.imagem"
                  alt="Produto"
                  class="w-10 h-10 object-cover rounded-md"
                />
                <div>
                  <p class="font-medium">{{ produto.nome }}</p>
                  <p class="text-xs text-gray-500">ID: {{ produto.id }}</p>
                </div>
              </td>
              <td>{{ produto.categoria }}</td>
              <td class="font-semibold">{{ produto.preco }}</td>
              <td>{{ produto.estoque }}</td>
              <td>
                <span
                  class="px-2 py-1 rounded-full text-xs font-medium"
                  :class="produto.status === 'Ativo'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'"
                >
                  {{ produto.status }}
                </span>
              </td>
              <td class="flex justify-center items-center space-x-3 text-gray-500">
                <button class="hover:text-gray-700">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button class="hover:text-gray-700">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
</template>

<script setup>
import NewProductButton from "../../components/admin/NewProductButton.vue";
import ViewStoreButton from "../../components/admin/ViewStoreButton.vue";


const produtos = [
  {
    id: 1,
    nome: "Smartphone Premium Galaxy",
    categoria: "Eletrônicos",
    preco: "R$ 1.299,99",
    estoque: 100,
    status: "Ativo",
    imagem: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    nome: "Notebook Gamer RTX 4060",
    categoria: "Eletrônicos",
    preco: "R$ 2.499,00",
    estoque: 41,
    status: "Ativo",
    imagem: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    nome: "Fones Bluetooth Premium",
    categoria: "Eletrônicos",
    preco: "R$ 299,99",
    estoque: 0,
    status: "Inativo",
    imagem: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    nome: "Smartwatch Sport Pro",
    categoria: "Eletrônicos",
    preco: "R$ 599,99",
    estoque: 10,
    status: "Ativo",
    imagem: "https://via.placeholder.com/50",
  },
];
</script>

<style scoped>
main {
  font-family: "Inter", sans-serif;
}
</style>
