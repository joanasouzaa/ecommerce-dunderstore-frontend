<template>
  <div class="flex min-h-screen">
    <Sidebar />


    <main class="flex-1 bg-white p-8">
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Clientes</h1>
          <p class="text-gray-900">Gerencie os clientes cadastrados na sua loja</p>
        </div>

        <div class="flex items-center">
          <ViewStoreButton />
        </div>
      </header>

      <section class="bg-[#F5F7FB] rounded-lg p-4 flex flex-wrap justify-between items-center shadow-sm mb-8">
        <div class="flex items-center  border-gray-300 rounded-md px-3 py-2 w-full md:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
          </svg>
          <input type="text" placeholder="Buscar por nome ou e-mail..." class="outline-none w-full bg-[#F5F7FB] text-sm text-gray-700" />
        </div>

        </section>

     

      <section class="card-product-list bg-[#F5F7FB] p-5 rounded-md">
        <!-- buscar quantidade de pedidos realizados -->
        <h2></h2>
        <div>
          <table class="table-auto w-full text-left">
            <thead class="text-gray-500 border-b text-md capitalize">
              <tr>
                <th class="color-[#7E7979] font-md">Clientes</th>
                <th class="color-[#7E7979] font-md">Contato</th>
                <th class="color-[#7E7979] font-md">Cadastro</th>
                <th class="color-[#7E7979] font-md">Pedidos</th>
                <th class="color-[#7E7979] font-md">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(cliente, index) in clientes" :key="index" class="hover:bg-gray-50">
                <td class="py-3 flex items-center gap-3">

                  <div>
                    <p class="font-medium">{{ cliente.nomeCliente }}</p>
                    <p class="text-xs text-gray-500">{{ cliente.emailCliente }}</p>
                  </div>
                </td>
                <td>{{ cliente.contato }}</td>
                <td class="">{{ cliente.dataCadastro }}</td>
                <td class="items-center">{{ cliente.totalPedidos }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../../components/SidebarAdminComponent.vue"
import ViewStoreButton from "../../components/ViewStoreButton.vue";

const clientes = [
  {
    id: 101,
    dataCadastro: "01/01/2025",
    nomeCliente: "Joana Souza",
    contato: "(14) 99999-9999",
    emailCliente: "joana@email.com",
    totalPedidos: "2"
  },
  {
    id: 102,
    dataCadastro: "01/02/2025",
    nomeCliente: "Enzo Bedendo",
    contato: "(11) 88888-8888",
    emailCliente: "enzo@email.com",
    totalPedidos: "4"
  },
  {
    id: 103,
    dataCadastro: "01/03/2025",
    nomeCliente: "Marcos Paulo",
    contato: "marcos@email.com",
    emailCliente: "marcos@email.com",
    totalPedidos: "8"
  },
  {
    id: 104,
    dataCadastro: "01/04/2025",
    nomeCliente: "Luisa Santos",
    contato: "luisa@email.com",
    emailCliente: "luisa@email.com",
    totalPedidos: "3"
  },
  {
    id: 105,
    dataCadastro: "07/10/2025",
    nomeCliente: "Ana Paula",
    contato: "ana@email.com",
    emailCliente: "ana@email.com",
    totalPedidos: "9"
  }
];
</script>