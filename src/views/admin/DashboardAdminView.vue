<template>
    <div>
        <div class="title flex justify-between">
            <div>
                <h1>Dashboard</h1>
                <p>Visão geral do seu e-commerce</p>
            </div>


            <div>
                <button>Ver Loja</button>
            </div>
        </div>
        <div class="card-content flex justify-between">
            <div class="card-1 bg-[#F5F7FB] rounded-md h-20 w-50">
                <p>Total de Produtos</p>

            </div>
            <div class="card-2 bg-[#F5F7FB] roudend-md">
                <p>Total de Pedidos</p>
            </div>
            <div class="card-3 bg-[#F5F7FB] rounded-md">
                <p>Total de Clientes</p>
            </div>
            <div class="card-4 bg-[#F5F7FB] rounded-md">
                <p>Receita Mensal</p>
            </div>
        </div>

        <div class="card-content-main flex justify-between">
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