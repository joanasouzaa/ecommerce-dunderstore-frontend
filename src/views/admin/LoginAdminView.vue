<template>
    <div class="bg-[#F5F7FB] flex flex-col items-center">
        <div class="bg-white rounded-lg">
            <div class="logo">
                <div class="rounded-full bg-[#141A7C] justify-center size-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</div>
                <div class="text-center">
                    <h1 class="text-lg">Dunder Store Admin</h1>
                    <p>Acesso restrito para administradores</p>
                </div>
            </div>
            <form class="">
                <div class="space-y-2 inline-block">
                    <label for="code_store">E-mail:</label>
                    <input type="email" class="border rounded-md bg-white">
                </div>
                <div class="password">
                    <label for="password">Senha:</label>
                    <input type="password" name="password" id="password" class="border rounded-md bg-white">
                </div>
                <div class="btn_login">
                    <button class="bg-[#141A7C] text-white">Acessar</button>
                    <p>Esquei meus dados de acesso</p>
                    <p>Ainda não tem uma loja?<span>Crie uma agora</span></p>
                </div>
            </form>

        </div>
    </div>
</template>