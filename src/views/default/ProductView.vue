<template>
  

    <!-- Conteúdo principal -->
    <main class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 py-10 px-6">
      <!-- Galeria de imagens -->
      <div class="flex flex-col items-center lg:w-1/2">
        <div class="border rounded-lg overflow-hidden">
          <img
            :src="selectedImage"
            alt="Salto Scarpin"
            class="w-[450px] h-[450px] object-contain"
          />
        </div>

        <div class="flex gap-4 mt-4">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            @click="selectedImage = image"
            class="w-20 h-20 object-contain border rounded-lg cursor-pointer hover:border-indigo-500"
            :class="selectedImage === image ? 'border-indigo-500' : 'border-gray-200'"
          />
        </div>
      </div>

      <!-- Detalhes do produto -->
      <div class="lg:w-1/2 flex flex-col gap-6">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900">Salto Scarpin</h1>
          <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
            ⭐⭐⭐⭐⭐ <span>(45 avaliações)</span>
          </div>
        </div>

        <div>
          <span class="text-3xl font-bold text-indigo-800">R$ 1299,99</span>
          <span class="text-gray-400 line-through text-sm ml-2">R$ 1599,99</span>
        </div>

        <div>
          <h2 class="font-semibold text-gray-800 mb-1">Descrição</h2>
          <p class="text-gray-600 leading-relaxed text-sm">
            Scarpin elegante com salto fino de 8cm, design sofisticado e acabamento em couro premium.
            Confortável e versátil, ideal para compor looks modernos e cheios de estilo.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-700 font-medium">Quantidade</span>
          <div class="flex items-center border rounded-md">
            <button
              @click="decreaseQuantity"
              class="px-3 py-1 text-gray-700 hover:bg-gray-100"
            >−</button>
            <input
              type="number"
              v-model="quantity"
              class="w-12 text-center outline-none"
              min="1"
            />
            <button
              @click="increaseQuantity"
              class="px-3 py-1 text-gray-700 hover:bg-gray-100"
            >+</button>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-6">
          <AddtToCartButton/>
          
          <ShopNowButton/>
        </div>
      </div>
    </main>
</template>

<script setup>
import { ref } from "vue";
import AddtToCartButton from "../../components/public/AddtToCartButton.vue";
import ShopNowButton from "../../components/public/ShopNowButton.vue";

const images = [
  "/images/scarpin1.png",
  "/images/scarpin2.png",
  "/images/scarpin3.png",
  "/images/scarpin4.png",
];

const selectedImage = ref(images[0]);
const quantity = ref(1);

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};
</script>
