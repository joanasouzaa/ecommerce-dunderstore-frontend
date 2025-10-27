<template>

  <section class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-6  py-1 bg-gray-50">
    <div class="items-center w-full">
      <Swiper :modules="[Autoplay, Pagination]" :autoplay="{ delay: 3000 }" :loop="true" pagination
        class="w-[1000px] md:w-[1000px] h-[700px] md:h-[400px] rounded-2xl shadow-lg">
        <SwiperSlide v-for="(img, i) in banners" :key="i">
          <img :src="img" alt="Banner" class="w-full h-full object-cover rounded-2xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <section class="bg-white py-14 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
    <div class="flex flex-1 flex-col items-center space-y-3 p-4 border rounded-xl hover:shadow-md transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
      <h4 class="text-lg font-semibold text-gray-800">Entrega Rápida</h4>
      <p class="text-gray-500">Com as melhores transportadoras</p>
    </div>

    <div class="flex flex-col items-center space-y-3 p-4 border rounded-xl hover:shadow-md transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
      <h4 class="text-lg font-semibold text-gray-800">Compra Segura</h4>
      <p class="text-gray-500">100% protegida</p>
    </div>

    <div class="flex flex-col items-center space-y-3 p-4 border rounded-xl hover:shadow-md transition">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
      <h4 class="text-lg font-semibold text-gray-800">Suporte 24/7</h4>
      <p class="text-gray-500">Sempre disponível</p>
    </div>

  </section>
  <section class="text-center py-10 px-6 md:px-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-3"> Explore Nossas Categorias </h2>
    <p class="text-gray-600 mb-10 max-w-2xl mx-auto"> Encontre exatamente o que você procura navegando por nossas
      categorias. </p> <!-- cada div de categoria tem que ter um link para a categoria -->
    <div class="flex space-x-4 justify-around items-center">
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Categoria 1</h4>
      </div>
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Categoria 2</h4>
      </div>
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Categoria 3</h4>
      </div>
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Categoria 4</h4>
      </div>
    </div>
  </section> 
  
  <section class="text-center py-10 px-6 md:px-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-3"> Produtos em Destaque </h2>
    <p class="text-gray-600 mb-10 max-w-2xl mx-auto"> Selecionamos os melhores produtos com ofertas especiais para você
    </p> <!-- Cada div do produtos tem que ter um link que leva para o produto -->
    <div class="flex space-x-4 justify-around items-center">
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4 class="pt-">Produto 1</h4>
      </div>
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Produto 2</h4>
      </div>
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Produto 3</h4>
      </div>
      <div class=""> <img src="../../assets/images/imagem_sapateira.png" alt=""
          class="rounded-2xl shadow-lg w-[200px] h-[200px] object-cover">
        <h4>Produto 4</h4>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from "../../components/public/FooterStoreComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const banners = [
  new URL('../../assets/images/banner1.jpg', import.meta.url).href,
  new URL('../../assets/images/banner2.jpg', import.meta.url).href,
  new URL('../../assets/images/banner3.jpg', import.meta.url).href,
];


const benefits = [
  { title: 'Entrega Rápida', description: 'Receba em até 24h' },
  { title: 'Compra Segura', description: '100% protegida' },
  { title: 'Suporte 24/7', description: 'Sempre disponível' },
];
</script>
