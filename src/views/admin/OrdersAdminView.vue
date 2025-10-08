<template>
    <div>
        <div class="title flex justify-between">
            <div>
                <h1>Pedidos</h1>
                <p>Gerencie os pedidos realizados em sua loja</p>
            </div>

            <div>
                <button>Ver Loja</button>
            </div>
        </div>

        <div class="filter-search">
            <div class="flex justify-between">
                <div>
                    <!-- icon search here -->
                    <span>Buscar produto</span>
                </div>
                <div class="space-x-2">
                    <select name="" id="">
                        <option value="teste">Todos os pagamentos</option>
                    </select>

                    <select name="" id="">
                        <option value="teste">Todos os status</option>
                        <option value="teste">teste</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="card-product-list bg-[#F5F7FB]">
            <div>
                <!-- buscar quantidade de pedidos realizados -->
                <h1>Pedidos (x)</h1>
                <div>
                    <table class="table-auto w-full text-left">
                        <thead>
                            <tr class="flex justify-between space-x-8">
                                <th class="color-[#7E7979] font-thin">Pedido</th>
                                <th class="color-[#7E7979] font-thin">Data</th>
                                <th class="color-[#7E7979] font-thin">Cliente</th>
                                <th class="color-[#7E7979] font-thin">Total</th>
                                <th class="color-[#7E7979] font-thin">Status</th>
                                <th class="color-[#7E7979] font-thin">Pagamento</th>
                                <th class="color-[#7E7979] font-thin">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>