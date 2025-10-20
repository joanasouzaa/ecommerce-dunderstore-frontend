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

    <div class="flex space-x-4 items-center">
      <div class="md:w-2/5 border w-[200px] h-[200px]">
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[100px] h-[100px] object-cover">
      </div>
      <div class="md:w-2/5 border w-[300px] h-[300px]"> 
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[200px] h-[200px] md:w-[200px] object-cover">
      </div>
      <div class="md:w-2/5 border w-[300px] h-[300px]">
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[200px] h-[200px] md:w-[200px] object-cover">
      </div>
      <div class="md:w-2/5 border w-[300px] h-[300px]">
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[200px] h-[200px] md:w-[200px] object-cover">
      </div>
    </div>
  </section>

  <!-- Produtos em destaque -->
   <section class="text-center bg-gray-50 py-10 px-6 md:px-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-3">
      Produtos em Destaque
    </h2>
    <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
      Selecionamos os melhores produtos com ofertas especiais para você
    </p>

    <div class="flex space-x-4 items-center">
      <div class="md:w-2/5 border w-[200px] h-[200px]">
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[100px] h-[100px] object-cover">
      </div>
      <div class="md:w-2/5 border w-[300px] h-[300px]"> 
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[200px] h-[200px] md:w-[200px] object-cover">
      </div>
      <div class="md:w-2/5 border w-[300px] h-[300px]">
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[200px] h-[200px] md:w-[200px] object-cover">
      </div>
      <div class="md:w-2/5 border w-[300px] h-[300px]">
        <img src="../../assets/images/imagem_sapateira.png" alt="" class="rounded-2xl shadow-lg w-[200px] h-[200px] md:w-[200px] object-cover">
      </div>
    </div>
   </section>

   <footer class="bg-[#141A7C] text-white">
  <div class="text-center py-12 px-4">
    <h2 class="text-3xl font-bold mb-2">Fique por Dentro das Novidades</h2>
    <p class="text-sm mb-6">
      Receba ofertas exclusivas, lançamentos e promoções especiais diretamente no seu email
    </p>
    <div class="flex justify-center">
      <input
        type="email"
        placeholder="Seu melhor email"
        class="px-4 py-2 rounded-l-md w-64 text-gray-900 focus:outline-none"
      />
      <button class="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-r-md text-white font-medium">
        Inscrever-se
      </button>
    </div>
  </div>

  <!-- Rodapé inferior -->
  <div class="bg-white text-gray-700 py-12 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Coluna 1 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-900">Dunder Store</h3>
        <p class="text-sm">
          Dunder Store – Sua loja online de confiança com os melhores produtos e atendimento.
        </p>
      </div>

      <!-- Coluna 2 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-900">Links Rápidos</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:underline">Produtos</a></li>
          <li><a href="#" class="hover:underline">Categorias</a></li>
          <li><a href="#" class="hover:underline">Ofertas</a></li>
          <li><a href="#" class="hover:underline">Contato</a></li>
        </ul>
      </div>

      <!-- Coluna 3 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-900">Suporte</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:underline">Central de Ajuda</a></li>
          <li><a href="#" class="hover:underline">Trocas e Devoluções</a></li>
          <li><a href="#" class="hover:underline">Política de Entrega</a></li>
          <li><a href="#" class="hover:underline">Privacidade</a></li>
        </ul>
      </div>

      <!-- Coluna 4 -->
      <div>
        <h3 class="text-lg font-semibold mb-3 text-gray-900">Contato</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="mailto:contato@dunderstore.com" class="hover:underline">contato@dunderstore.com</a></li>
          <li>(11) 9999-9999</li>
          <li>Seg–Sex: 9h às 18h</li>
        </ul>
      </div>
    </div>

    <hr class="my-8 border-gray-300" />

    <p class="text-center text-sm text-gray-500">
      © 2025 Dunder Store. Todos os direitos reservados.
    </p>
  </div>
</footer>

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
