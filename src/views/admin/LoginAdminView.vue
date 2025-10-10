<template>
  <div class="min-h-screen bg-[#F5F7FB] flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-sm p-10 w-full max-w-md text-center">
      <div class="flex flex-col items-center mb-6">
        <div class="rounded-full bg-[#141A7C] flex items-center justify-center w-12 h-12 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
        <h1 class="text-lg font-semibold text-gray-800">Dunder Store Admin</h1>
        <p class="text-sm text-gray-500">Acesso restrito para administradores</p>
      </div>

      <!-- Form -->
      <form class="space-y-4 text-left">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#141A7C] focus:border-[#141A7C]"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#141A7C] focus:border-[#141A7C]"
            placeholder="Digite sua senha"
          />
        </div>

        <button type="submit" class="w-full bg-[#141A7C] hover:bg-[#0F1560] text-white font-medium py-2 rounded-md transition">
          Entrar no Painel</button>

        <div class="text-center mt-2">
          <a href="#" class="text-sm text-gray-700 hover:underline">Esqueci meus dados de acesso</a>
        </div>

        <p class="text-center text-sm text-gray-600 mt-4">Ainda não tem uma loja? <a href="#" class="font-medium text-gray-800 hover:underline">Crie uma agora</a></p>
      </form>
    </div>
  </div>
</template>
