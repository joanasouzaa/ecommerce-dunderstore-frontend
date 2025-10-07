<template>
    <div>
        <div class="title flex justify-between">
            <div>
                <h1 class="text-2xl">Dashboard</h1>
                <p class="text-[#7E7979] text-sm">Visão geral do seu e-commerce</p>
            </div>

            <div>
                <!-- adicionar o componente de botão -->
                <button>Ver Loja</button> 
            </div>
        </div>
        <div class="card-content flex justify-between rounded-md mt-10 items-center">
            <div class="card-1 bg-[#F5F7FB] rounded-md h-20 w-50 text-center p-5 border">
                <span class="text-xs text-[#7E7979] font-light">Total de Produtos</span>
                <!-- puxar dados reais da loja -->
                <p>560</p>
            </div>

            <div class="card-2 bg-[#F5F7FB] roudend-md text-center rounded-md p-5 border">
                <span class="text-xs text-[#7E7979] font-light">Total de Pedidos</span>
                <!-- puxar dados reais da loja -->
                <p>1500</p>
            </div>

            <div class="card-3 bg-[#F5F7FB] text-center rounded-md p-5 border-solid border">
                <span class="text-xs text-[#7E7979] font-light">Total de Clientes</span>
                <!-- puxar dados reais da loja -->
                <p>600</p>
            </div>
            <div class="card-4 bg-[#F5F7FB] rounded-md text-center rounded-md p-5 border">
                <span class="text-xs text-[#7E7979] font-light">Receita Mensal</span>
                <!-- puxar dados reais da loja -->  
                <p>R$ 460.000</p>
            </div>
        </div>

        <div class="card-content-main flex justify-between mt-20">
            <div class="card-orders bg-[#F5F7FB] h-40 w-60">
                <p>Pedidos Recentes</p>
                <span>Últimos pedidos realizados</span>
            </div>
            <div class="card-products bg-[#F5F7FB] h-40 w-60">
                <p>Produtos Destaques</p>
                <span>Produtos mais vendidos</span>
            </div>

        </div>
    </div>

</template>