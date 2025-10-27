<template>
    <!-- Breadcrumb -->
    <div class="max-w-7xl mx-auto mt-6 px-6 text-sm text-gray-500">
        Início / <span class="text-gray-800">Carrinho de Compras</span>
    </div>

    <!-- Conteúdo principal -->
    <main class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 py-10 px-6">
        <!-- Lista de produtos -->
        <div class="flex-1">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-xl font-semibold text-gray-900">Carrinho de Compras</h1>
                <span class="text-sm text-gray-500">{{ items.length }} itens no seu carrinho</span>
            </div>

            <button
                class="flex items-center gap-2 text-sm border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 mb-6">
                ← Continuar Comprando
            </button>

            <div v-for="(item, index) in items" :key="index"
                class="flex items-center justify-between border rounded-lg p-4 mb-4 shadow-sm">
                <div class="flex items-center gap-4">
                    <div class="w-20 h-20 bg-gray-200 rounded"></div>
                    <div>
                        <h2 class="text-gray-800 font-medium">{{ item.name }}</h2>
                        <p class="text-gray-700 font-semibold">R$ {{ item.price.toFixed(2) }}</p>
                        <div class="flex items-center mt-2">
                            <button @click="decreaseQuantity(index)"
                                class="px-3 py-1 border border-gray-300 rounded-l hover:bg-gray-100">−</button>
                            <input type="number" v-model="item.quantity"
                                class="w-12 text-center border-t border-b border-gray-300 outline-none" min="1" />
                            <button @click="increaseQuantity(index)"
                                class="px-3 py-1 border border-gray-300 rounded-r hover:bg-gray-100">+</button>
                        </div>
                    </div>
                </div>
                <button @click="removeItem(index)" class="text-red-500 hover:text-red-700 text-lg">
                    <!-- aqui vai o ícone de lixinho -->
                </button>
            </div>
        </div>

        <!-- Resumo do pedido -->
        <aside class="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg border shadow-sm h-fit">
            <h2 class="font-semibold text-[#141A7C] flex items-center gap-2 mb-4">
                Resumo do Pedido
            </h2>

            <!-- Campo de cupom -->
            <div class="mb-4">
                <label class="text-sm font-medium text-gray-700">Cupom de Desconto</label>
                <div class="flex mt-1">
                    <input v-model="coupon" type="text" placeholder="Digite o cupom"
                        class="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                    <button class="bg-indigo-900 text-white text-sm px-4 py-2 rounded-r hover:bg-indigo-800">
                        Aplicar
                    </button>
                </div>
            </div>

            <!-- Campo de frete -->
            <div class="mb-4">
                <label class="text-sm font-medium text-gray-700">Calcular Frete</label>
                <div class="flex mt-1">
                    <input v-model="cep" type="text" placeholder="Digite seu CEP"
                        class="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                    <button @click="calcularFrete"
                        class="bg-indigo-900 text-white text-sm px-4 py-2 rounded-r hover:bg-indigo-800">
                        Calcular
                    </button>
                </div>
                <p v-if="frete" class="text-sm text-gray-600 mt-1">
                    Frete estimado: <span class="font-semibold">R$ {{ frete.toFixed(2) }}</span>
                </p>
            </div>

            <!-- Totais -->
            <div class="text-sm text-gray-700 border-t pt-4 mt-4">
                <div class="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>R$ {{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between mb-2">
                    <span>Economia</span>
                    <span>R$ 0,00</span>
                </div>
                <div class="flex justify-between font-semibold text-gray-900 text-base mt-2">
                    <span>Total</span>
                    <span>R$ {{ total.toFixed(2) }}</span>
                </div>
            </div>

            <!-- Botão de pagamento -->
            <router-link to="/checkout"
                class="w-full p-2 mt-6 bg-indigo-900 text-white font-medium py-2 rounded-lg hover:bg-indigo-800 transition">
                Prosseguir para o Pagamento
            </router-link>
        </aside>
    </main>

</template>

<script setup>
import { ref, computed } from "vue";

//console.log("Página de Carrinho")

const items = ref([
    {
        name: "Salto Scarpin",
        price: 1299.99,
        quantity: 1
    },
    {
        name: "Salto Scarpin",
        price: 1299.99,
        quantity: 1
    },
    {
        name: "Salto Scarpin",
        price: 1299.99,
        quantity: 1
    },
]);

const coupon = ref("");
const cep = ref("");
const frete = ref(null);

const subtotal = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const total = computed(() => subtotal.value + (frete.value || 0));

const increaseQuantity = (index) => {
    items.value[index].quantity++;
};

const decreaseQuantity = (index) => {
    if (items.value[index].quantity > 1) items.value[index].quantity--;
};

const removeItem = (index) => {
    items.value.splice(index, 1);
};

const calcularFrete = () => {
    // Simulação de cotação de frete
    frete.value = Math.random() * 50 + 10; // gera valor entre 10 e 60
};
</script>
