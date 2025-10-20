<template>
    <main>
        <div class="flex-1 bg-white p-8">
            <header class="flex justify-between items-center mb-8">
                <div>
                    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    <p class="text-gray-900">Visão geral do seu e-commerce</p>
                </div>

                <div class="flex items-center space-x-3">
                    <ViewStoreButton />
                </div>
            </header>
        </div>
        <section class="card-content flex justify-around mt-10 bg-white">
            <div class="card-1 bg-[#F5F7FB] rounded-md text-center p-5 border">
                <span class="text-xs text-[#7E7979] font-md">Total de Produtos</span>
                <!-- puxar dados reais da loja -->
                <p>560</p>
            </div>

            <div class="card-2 bg-[#F5F7FB] roudend-md text-center rounded-md p-5 border">
                <span class="text-xs text-[#7E7979] font-light">Total de Pedidos</span>
                <!-- puxar dados reais da loja -->
                <p>1500</p>
            </div>

            <div class="card-3 bg-[#F5F7FB] text-center rounded-md p-5 border-solid border">
                <span class="text-xs text-[#7E7979] font-light">Total de Clientes</span>
                <!-- puxar dados reais da loja -->
                <p>600</p>
            </div>
            <div class="card-4 bg-[#F5F7FB] rounded-md text-center rounded-md p-5 border">
                <span class="text-xs text-[#7E7979] font-light">Receita Mensal</span>
                <!-- puxar dados reais da loja -->
                <p>R$ 460.000</p>
            </div>
        </section>

        <section class="card-product-list bg-white p-5 rounded-md flex flex-1 justify-between">
            <!-- Pedidos recentes -->
            <div class="w-50 h-60 border bg-[#F5F7FB]">
                <h2>Pedidos Recentes</h2>
                <span>Últimos pedidos realizados</span>
                <div>
                    <table class="table-auto w-full text-left">
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(pedido, index) in pedidos" :key="index" class="hover:bg-gray-50">
                                <td class="py-3 flex items-center space-x-40 justify-between">

                                    <div>
                                        <p class="font-medium">#{{ pedido.id }}</p>
                                        <p class="font-light">{{ pedido.nomeCliente }}</p>
                                    </div>
                                    <div>
                                        <p>R$ {{ pedido.totalPedido }}</p>
                                        <p class="font-light">{{ pedido.statusPedido }}</p>
                                    </div>

                                </td>
                                <td>{{ }}</td>
                                <td class="">{{ }}</td>
                                <td class="items-center">{{ }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Produtos em destaque -->
            <div>
                <h2>Produtos em Destaque</h2>
                <span>Produtos mais vendidos</span>
                <div>
                    <table class="table-auto w-full text-left">
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="(produto, index) in produtos" :key="index" class="hover:bg-gray-50">
                                <td class="py-3 flex items-center space-x-40 justify-between">

                                    <div>
                                        <p class="font-light">{{ produto.nomeProduto}}</p>
                                    </div>

                                    <div>
                                        <p>{{ produto.precoProduto }}</p>
                                    </div>
                                </td>
                                <td>{{ }}</td>
                                <td class="">{{ }}</td>
                                <td class="items-center">{{ }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <!-- <div class="card-products bg-[#F5F7FB] h-40 w-60">
            <p>Produtos Destaques</p>
            <span>Produtos mais vendidos</span>
        </div> -->
    </main>
</template>

<script setup>
import ViewStoreButton from "../../components/admin/ViewStoreButton.vue";

const pedidos = [
    {
        id: 1234,
        nomeCliente: "Fulano de Tal",
        totalPedido: "123,48",
        statusPedido: "Pago"
    },
    {
        id: 1234,
        nomeCliente: "Beltrano Santos",
        totalPedido: "6.854,90",
        statusPedido: "Pendente"
    }
];

const produtos = [
    {
        nomeProduto: "Smartphone Pro",
        precoProduto: "5.300"
    },
    {
        nomeProduto: "Smartphone Pro",
        precoProduto: "5.300"
    }
]


</script>