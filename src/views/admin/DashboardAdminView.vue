<template>
  <main class="p-8 bg-gray-100 min-h-screen">
    <header class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p class="text-gray-900">Visão geral do seu e-commerce</p>
      </div>

      <div class="flex items-center space-x-3">
        <ViewStoreButton />
      </div>
    </header>

    <!-- Cards principais -->
    <section class="grid grid-cols-4 gap-4 mb-8">
      <div class="bg-white rounded-md text-center p-5 shadow">
        <span class="text-xs text-gray-500">Total de Produtos</span>
        <p class="text-xl font-semibold">{{ totalProdutos }}</p>
      </div>

      <div class="bg-white rounded-md text-center p-5 shadow">
        <span class="text-xs text-gray-500">Total de Pedidos</span>
        <p class="text-xl font-semibold">{{ totalPedidos }}</p>
      </div>

      <div class="bg-white rounded-md text-center p-5 shadow">
        <span class="text-xs text-gray-500">Total de Clientes</span>
        <p class="text-xl font-semibold">{{ totalClientes }}</p>
      </div>

      <div class="bg-white rounded-md text-center p-5 shadow">
        <span class="text-xs text-gray-500">Receita Mensal</span>
        <p class="text-xl font-semibold">R$ {{ receitaMensal }}</p>
      </div>
    </section>

    <!-- Pedidos recentes e Produtos em destaque -->
    <section class="grid grid-cols-2 gap-8">
      <!-- Pedidos recentes -->
      <div class="bg-white p-5 rounded-md shadow">
        <h2 class="font-semibold mb-2">Pedidos Recentes</h2>
        <span class="text-sm text-gray-500">Últimos pedidos realizados</span>
        <table class="table-auto w-full mt-3 text-left">
          <tbody class="divide-y divide-gray-200">
            <tr v-for="pedido in pedidosRecentes" :key="pedido.id" class="hover:bg-gray-50">
              <td class="py-2">
                <p class="font-medium">#{{ pedido.id }}</p>
                <p class="text-sm text-gray-500">{{ pedido.nomeCliente }}</p>
              </td>
              <td class="py-2 text-right">
                <p class="font-semibold">R$ {{ pedido.totalPedido }}</p>
                <p class="text-sm text-gray-500">{{ pedido.statusPedido }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Produtos em destaque -->
      <div class="bg-white p-5 rounded-md shadow">
        <h2 class="font-semibold mb-2">Produtos em Destaque</h2>
        <span class="text-sm text-gray-500">Produtos mais vendidos</span>
        <table class="table-auto w-full mt-3 text-left">
          <tbody class="divide-y divide-gray-200">
            <tr v-for="produto in produtosDestaque" :key="produto.id" class="hover:bg-gray-50">
              <td class="py-2">
                <p class="font-medium">{{ produto.nome }}</p>
              </td>
              <td class="py-2 text-right">
                <p class="font-semibold">R$ {{ produto.preco }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ViewStoreButton from "../../components/admin/ViewStoreButton.vue";
import productService from "../../services/productService";
import pedidoService from "../../services/pedidoService"; 

// Totais
const totalProdutos = ref(0);
const totalPedidos = ref(0);
const totalClientes = ref(0);
const receitaMensal = ref(0);

// Listas
const pedidosRecentes = ref([]);
const produtosDestaque = ref([]);

// Função para carregar dados do dashboard
async function carregarDashboard() {
  try {
    // Produtos
    const produtosData = await productService.getAll({ pagina: 1, itensPorPagina: 100 });
    totalProdutos.value = produtosData.totalItens;

    // Pedidos
    const pedidosData = await pedidoService.getAll({ pagina: 1, itensPorPagina: 5 });
    totalPedidos.value = pedidosData.totalItens;
    pedidosRecentes.value = pedidosData.pedidos.map(p => ({
      id: p.id,
      nomeCliente: p.clienteNome || p.cliente?.nome || "Cliente",
      totalPedido: Number(p.total).toLocaleString("pt-BR", { minimumFractionDigits: 2 }),
      statusPedido: p.status || "Pendente",
    }));

    // Clientes
    const clientesData = await pedidoService.getClientes(); // ou criar endpoint /api/cliente
    totalClientes.value = clientesData.length;

    // Receita mensal (soma de pedidos pagos no mês atual)
    const pedidosPagos = pedidosData.pedidos.filter(p => p.status === "Pago");
    const receita = pedidosPagos.reduce((acc, p) => acc + Number(p.total), 0);
    receitaMensal.value = receita.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    // Produtos em destaque (mais vendidos)
    produtosDestaque.value = produtosData.produtos
      .sort((a, b) => b.vendas - a.vendas) // assume que cada produto tem 'vendas'
      .slice(0, 5)
      .map(p => ({
        id: p.id,
        nome: p.nome,
        preco: Number(p.preco).toLocaleString("pt-BR", { minimumFractionDigits: 2 }),
      }));
  } catch (error) {
    console.error("Erro ao carregar dashboard:", error);
  }
}

onMounted(() => {
  carregarDashboard();
});
</script>
