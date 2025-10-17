<template>
  <div class="flex min-h-screen">
    <Sidebar />


    <main class="flex-1 bg-[#F5F7FB] p-8">
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Pedidos</h1>
          <p class="text-gray-900">Gerencie os pedidos realizados em sua loja</p>
        </div>

        <div class="flex items-center">
          <ViewStoreButton />
        </div>
      </header>

      <section class="bg-white rounded-lg p-4 flex flex-wrap justify-between items-center shadow-sm mb-8">
        <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
          </svg>
          <input type="text" placeholder="Buscar produto" class="outline-none w-full text-sm text-gray-700" />
        </div>

        <div class="flex space-x-3 mt-3 md:mt-0">
          <select class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white">
            <option>Todas as categorias</option>
          </select>
          <select class="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white">
            <option>Todos os status</option>
          </select>
        </div>

      </section>

      <section class="card-product-list bg-[#F5F7FB]">
        <!-- buscar quantidade de pedidos realizados -->
        <h2>Pedidos (x)</h2>
        <div>
          <table class="table-auto w-full text-left">
            <thead class="text-gray-500 border-b text-md capitalize">
              <tr>
                <th class="color-[#7E7979] font-md">Pedido</th>
                <th class="color-[#7E7979] font-md">Data</th>
                <th class="color-[#7E7979] font-md">Cliente</th>
                <th class="color-[#7E7979] font-md">Total</th>
                <th class="color-[#7E7979] font-md">Status</th>
                <th class="color-[#7E7979] font-md">Pagamento</th>
                <th class="color-[#7E7979] font-md">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(pedido, index) in pedidos" :key="index" class="hover:bg-gray-50">
                <td class="py-3 flex items-center gap-3">

                  <div>
                    <p class="font-medium">#{{ pedido.id }}</p>
                    <!-- <p class="text-xs text-gray-500">{{ pedido.cliente }}</p> -->
                  </div>
                </td>
                <td>{{ pedido.data }}</td>
                <td class="">{{ pedido.cliente }}</td>
                <td>R$ {{ pedido.total }}</td>
                <td>
                  <span class="px-2 py-1 rounded-full text-xs font-medium" :class="pedido.status === 'Finalizado'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'">
                    {{ pedido.status }}
                  </span>
                </td>
                <td class="px-2 py-1 rounded-full text-xs font-medium">{{ pedido.pagamento }}</td>
                <td class="flex justify-center items-center space-x-3 text-gray-500">
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../../components/admin/SidebarAdminComponent.vue"
import ViewStoreButton from "../../components/admin/ViewStoreButton.vue";

const pedidos = [
  {
    id: 101,
    data: "09/10/2025",
    cliente: "Joana Souza",
    total: "R$ 199,90",
    status: "Finalizado",
    pagamento: "Cartão",
  },
  {
    id: 102,
    data: "08/10/2025",
    cliente: "Carlos Lima",
    total: "R$ 89,90",
    status: "Pendente",
    pagamento: "Pix",
  },
  {
    id: 103,
    data: "07/10/2025",
    cliente: "Ana Paula",
    total: "R$ 129,50",
    status: "Cancelado",
    pagamento: "Boleto",
  },
];
</script>