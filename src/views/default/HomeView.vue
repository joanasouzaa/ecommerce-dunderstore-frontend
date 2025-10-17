<template>
  <!-- Seção Hero -->
  <section class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-1 bg-gray-50">
    <!-- Texto -->
    <div class="text-center md:text-left md:w-1/2">
      <h1 class="text-4xl md:text-5xl font-poppins font-black leading-[1.1] tracking-tight mb-8">
        Descubra os melhores<br />
        <span class="text-[#141A7C]">Produtos</span> Online
      </h1>
      <p class="text-gray-600 text-[17px] md:text-lg max-w-xl mx-auto md:mx-0 leading-[1.6]">
        Encontre tudo o que você precisa na Dunder Store. Qualidade garantida,
        entrega rápida e os melhores preços do mercado.
      </p>
    </div>

    <!-- Imagem -->
    <div class="md:w-2/5 flex justify-center">
      <img src="../../assets/images/imagem_sapateira.png" alt="Produtos em prateleira"
        class="rounded-2xl shadow-lg w-[300px] md:w-[400px] object-cover" />
    </div>
  </section>

  <!-- Benefícios -->
  <section class="bg-white py-14 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
    <div v-for="benefit in benefits" :key="benefit.title"
      class="flex flex-col items-center space-y-3 p-4 border rounded-xl hover:shadow-md transition">
      
      <component :is="benefit.icon" class="w-10 h-10 flex" />
      <h4 class="text-lg font-semibold text-gray-800">{{ benefit.title }}</h4>
      <p class="text-gray-500">{{ benefit.description }}</p>
    </div>
  </section>

  <!-- Categorias -->
  <section class="text-center bg-gray-50 py-10 px-6 md:px-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-3">
      Explore Nossas Categorias
    </h2>
    <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
      Encontre exatamente o que você procura navegando por nossas categorias.
    </p>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Entrega Rápida',
    description: 'Receba em até 24h',
  },
  {
    title: 'Compra Segura',
    description: '100% protegida',
  },
  {
    title: 'Suporte 24/7',
    description: 'Sempre disponível',
  },
]
</script>
