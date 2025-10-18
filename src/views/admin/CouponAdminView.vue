<template>

    <main class="flex-1 bg-white p-8">
        <header class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-2xl font-semibold text-gray-900">Cupons de Desconto</h1>
                <p class="text-gray-900">Gerencie os cupons de desconto da sua loja</p>
            </div>

            <div class="flex items-center space-x-3">
                <ViewStoreButton />
                <NewCouponButton/>
            </div>
        </header>

        <section class="bg-[#F5F7FB] rounded-lg p-4 flex flex-wrap justify-between items-center shadow-sm mb-8">
            <div class="flex items-center  border-gray-300 rounded-md px-3 py-2 w-full md:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500 mr-2" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                </svg>
                <input type="text" placeholder="Buscar por nome ou e-mail..."
                    class="outline-none w-full bg-[#F5F7FB] text-sm text-gray-700" />
            </div>

        </section>



        <section class="card-product-list bg-[#F5F7FB] p-5 rounded-md">
            <!-- buscar quantidade de pedidos realizados -->
            <h2 class="pb-4">Lista de Cupons</h2>
            <div>
                <table class="table-auto w-full text-left">
                    <thead class="text-gray-500 border-b text-md capitalize">
                        <tr>
                            <th class="color-[#7E7979] font-md">Código</th>
                            <th class="color-[#7E7979] font-md">Descrição</th>
                            <th class="color-[#7E7979] font-md">Desconto</th>
                            <th class="color-[#7E7979] font-md">Validade</th>
                            <th class="color-[#7E7979] font-md">Status</th>
                            <th class="color-[#7E7979] font-md">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="(cupom, index) in cupons" :key="index" class="hover:bg-gray-50">
                            <td class="py-3 flex items-center gap-3">

                                <div>
                                    <p class="font-medium">{{ cupom.nomeCupom }}</p>
                                </div>
                            </td>
                            <td>{{ cupom.descrição }}</td>
                            <td class="">{{ cupom.desconto }}</td>
                            <td class="items-center">{{ cupom.dataInicial }} - <br></br> {{ cupom.dataFinal }}</td>
                            <td>{{ cupom.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>

<script setup>
import ViewStoreButton from "../../components/admin/ViewStoreButton.vue";
import NewCouponButton from "../../components/admin/NewCouponButton.vue";

const cupons = [
    {
        id: 101,
        nomeCupom: "BEMVINDO",
        descrição: "Desconto de boas-vindas para novos clientes",
        desconto: "10%",
        dataInicial: "31/12/2023",
        dataFinal: "30/12/2024",
        status: "Ativo"
    },
    {
        id: 102,
        nomeCupom: "FRETE20",
        descrição: "Desconto fixo no frete",
        desconto: "R$ 20",
        dataInicial: "31/12/2023",
        dataFinal: "30/12/2024",
        status: "Inativo"
    },
    {
        id: 103,
        nomeCupom: "BLACKFRIDAY50",
        descrição: "Super desconto Black Friday",
        desconto: "10%",
        dataInicial: "31/12/2023",
        dataFinal: "30/12/2024",
        status: "Ativo"
    }
];
</script>