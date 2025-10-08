<template>
    <div>
        <div class="title flex justify-between">
            <div>
                <h1>Cupons de Desconto</h1>
                <p>Gerencie os cupons de desconto da sua loja</p>
            </div>

            <div>
                <!-- chamada para componente de button (view store) -->
                <button>Ver Loja</button>
                <!-- chamada para componente de button (new coupon) -->
                <button>Novo Cupom</button>
            </div>
        </div>

        <div class="card-coupons">
            <div>
                <div class="search-coupons">
                    <h3>Lista de cupons</h3>
                    <p>Visualize e gerencie todos os clientes cadastrados</p>
                </div>
                <div class="coupon-search-area">
                    <!-- icon lupa -->
                    <span>Buscar por nome do cupom</span>
                </div>
            </div>
        </div>

        <div class="coupon-list">
            <table class="table-auto w-full text-left">
                <thead>
                    <tr class="flex justify-between space-x-8">
                        <th class="color-[#7E7979] font-thin">Cupom</th>
                        <th class="color-[#7E7979] font-thin">Descrição</th>
                        <th class="color-[#7E7979] font-thin">Desconto</th>
                        <th class="color-[#7E7979] font-thin">Validade</th>
                        <th class="color-[#7E7979] font-thin">Status</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">

                </tbody>
            </table>
        </div>

    </div>
</template>