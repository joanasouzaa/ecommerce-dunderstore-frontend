<template>

    <main class="flex-1 bg-white p-8">
        <header class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-2xl font-semibold text-gray-900">Categorias</h1>
                <p class="text-gray-900">Organize seus produtos em categorias</p>
            </div>

            <div class="flex items-center space-x-3">
                <ViewStoreButton />
                <NewCategory/>
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
            <h2></h2>
            <div>
                <table class="table-auto w-full text-left">
                    <thead class="text-gray-500 border-b text-md capitalize">
                        <tr>
                            <th class="color-[#7E7979] font-md">Nome</th>
                            <th class="color-[#7E7979] font-md">Slug</th>
                            <th class="color-[#7E7979] font-md">Produtos</th>
                            <th class="color-[#7E7979] font-md">Status</th>
                            <th class="color-[#7E7979] font-md">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="(categoria, index) in categorias" :key="index" class="hover:bg-gray-50">
                            <td class="py-3 flex items-center gap-3">

                                <div>
                                    <p class="font-medium">{{ categoria.nomeCategoria }}</p>
                                </div>
                            </td>
                            <td>{{ categoria.slugCategoria }}</td>
                            <td class="">{{ categoria.totalProdutos }}</td>
                            <td class="items-center">{{ categoria.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>

<script setup>
import ViewStoreButton from "../../components/admin/ViewStoreButton.vue";
import NewCategory from "../../components/admin/NewCategoryButtomComponent.vue";

const categorias = [
    {
        id: 101,
        nomeCategoria: "Feminino",
        slugCategoria: "feminino",
        totalProdutos: "180",
        status: "Ativa"
    },
    {
        id: 102,
        nomeCategoria: "Masculino",
        slugCategoria: "masculino",
        totalProdutos: "180",
        status: "Inativa"
    },
    {
        id: 103,
        nomeCategoria: "Esporte Casual",
        slugCategoria: "esporte-casual",
        totalProdutos: "180",
        status: "Ativa"

    },
    {
        id: 104,
        nomeCategoria: "Infantil",
        slugCategoria: "infantil",
        totalProdutos: "180",
        status: "Ativa"

    },
    {
        id: 105,
        nomeCategoria: "Luxo",
        slugCategoria: "luxo",
        totalProdutos: "180",
        status: "Ativa"

    }
];
</script>