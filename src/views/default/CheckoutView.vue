<template>
<div class="flex justify-center items-center gap-8 py-6">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-[#0B1739] text-white flex items-center justify-center text-xs font-semibold">1</div>
        <span class="font-medium text-[#0B1739]">Carrinho</span>
      </div>
      <div class="w-16 h-[2px] bg-gray-300"></div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full border-2 border-[#0B1739] text-[#0B1739] flex items-center justify-center text-xs font-semibold bg-[#E5EBFF]">2</div>
        <span class="font-medium text-[#0B1739]">Checkout</span>
      </div>
      <div class="w-16 h-[2px] bg-gray-300"></div>
      <div class="flex items-center gap-2 opacity-50">
        <div class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-semibold">3</div>
        <span class="font-medium text-gray-500">Confirmação</span>
      </div>
    </div>

    <!-- Conteúdo principal -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-16">
      <!-- Coluna esquerda (formulários) -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Endereço de Entrega -->
        <section class="border rounded-xl p-6 bg-white shadow-sm">
          <h2 class="flex items-center gap-2 text-lg font-semibold text-[#0B1739] mb-4">
            Endereço de Entrega
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm text-gray-600 mb-1">CEP *</label>
              <input type="text" placeholder="00000-000" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Estado *</label>
              <input type="text" placeholder="SP" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm text-gray-600 mb-1">Endereço *</label>
              <input type="text" placeholder="Rua, Avenida, etc." class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Número *</label>
              <input type="text" placeholder="123" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Complemento</label>
              <input type="text" placeholder="Apto, Bloco, etc." class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Bairro *</label>
              <input type="text" placeholder="Centro" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Cidade *</label>
              <input type="text" placeholder="São Paulo" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
          </div>
        </section>

        <!-- Método de Entrega -->
        <section class="border rounded-xl p-6 bg-white shadow-sm hidden">
          <h2 class="flex items-center gap-2 text-lg font-semibold text-[#0B1739] mb-4">
            Método de Entrega
          </h2>

          <div class="space-y-3">
            <label class="flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer hover:border-[#0B1739] transition">
              <div>
                <p class="font-medium text-[#0B1739]">Entrega Padrão</p>
                <p class="text-sm text-gray-500">5–7 dias úteis</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold">R$ 15,99</span>
                <input type="radio" name="frete" checked class="accent-[#0B1739]" />
              </div>
            </label>

            <label class="flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer hover:border-[#0B1739] transition">
              <div>
                <p class="font-medium text-[#0B1739]">Entrega Expressa</p>
                <p class="text-sm text-gray-500">2–3 dias úteis</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold">R$ 29,99</span>
                <input type="radio" name="frete" class="accent-[#0B1739]" />
              </div>
            </label>

            <label class="flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer hover:border-[#0B1739] transition">
              <div>
                <p class="font-medium text-[#0B1739]">Entrega no Mesmo Dia</p>
                <p class="text-sm text-gray-500">Hoje</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold">R$ 49,99</span>
                <input type="radio" name="frete" class="accent-[#0B1739]" />
              </div>
            </label>
          </div>
        </section>

        <!-- Forma de Pagamento -->
        <section class="border rounded-xl p-6 bg-white shadow-sm hidden">
          <h2 class="flex items-center gap-2 text-lg font-semibold text-[#0B1739] mb-4">
           Forma de Pagamento
          </h2>

          <div class="space-y-3 mb-4">
            <label class="flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer hover:border-[#0B1739] transition">
              <span class="font-medium text-[#0B1739]">Cartão de Crédito</span>
              <input type="radio" name="pagamento" checked class="accent-[#0B1739]" />
            </label>
            <label class="flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer hover:border-[#0B1739] transition">
              <span class="font-medium text-[#0B1739]">PIX</span>
              <input type="radio" name="pagamento" class="accent-[#0B1739]" />
            </label>
            <label class="flex items-center justify-between border rounded-md px-4 py-3 cursor-pointer hover:border-[#0B1739] transition">
              <span class="font-medium text-[#0B1739]">Boleto Bancário</span>
              <input type="radio" name="pagamento" class="accent-[#0B1739]" />
            </label>
          </div>

          <!-- Campos do cartão -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="md:col-span-2">
              <label class="block text-sm text-gray-600 mb-1">Número do Cartão *</label>
              <input type="text" placeholder="0000 0000 0000 0000" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm text-gray-600 mb-1">Nome no Cartão *</label>
              <input type="text" placeholder="Nome como está no cartão" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">Validade *</label>
              <input type="text" placeholder="MM/AA" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
            <div>
              <label class="block text-sm text-gray-600 mb-1">CVV *</label>
              <input type="text" placeholder="123" class="w-full border rounded-md px-3 py-2 focus:ring-[#0B1739] focus:border-[#0B1739]" />
            </div>
          </div>
        </section>
      </div>

      <!-- Coluna direita (resumo) -->
      <div>
        <aside class="border rounded-xl p-6 bg-white shadow-sm">
          <h2 class="text-lg font-semibold text-[#0B1739] mb-4">Resumo do Pedido</h2>

          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <img src="https://via.placeholder.com/60" alt="" class="w-16 h-16 rounded-md object-cover" />
              <div>
                <p class="text-sm font-medium text-[#0B1739]">Smartphone Premium Galaxy</p>
                <p class="text-sm text-gray-500">Qtd: 1</p>
                <p class="text-[#0B1739] font-semibold">R$ 1299,99</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <img src="https://via.placeholder.com/60" alt="" class="w-16 h-16 rounded-md object-cover" />
              <div>
                <p class="text-sm font-medium text-[#0B1739]">Fones Bluetooth Premium</p>
                <p class="text-sm text-gray-500">Qtd: 2</p>
                <p class="text-[#0B1739] font-semibold">R$ 599,98</p>
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="space-y-1 text-sm">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>R$ 1899,97</span>
            </div>
            <div class="flex justify-between">
              <span>Frete (Entrega Padrão)</span>
              <span>R$ 15,99</span>
            </div>
          </div>

          <hr class="my-4" />

          <div class="flex justify-between font-semibold text-[#0B1739] text-lg">
            <span>Total</span>
            <span>R$ 1915,96</span>
          </div>

          <button class="mt-6 w-full bg-[#0B1739] text-white font-medium py-3 rounded-md hover:opacity-90 transition">
            Finalizar Pedido
          </button>

          <p class="text-xs text-center text-gray-500 mt-2">
            Pagamento 100% seguro e protegido
          </p>
        </aside>
      </div>
    </div>
 
</template>

<script setup>
// Nenhuma lógica dinâmica por enquanto

console.log("teste checkout")
</script>
