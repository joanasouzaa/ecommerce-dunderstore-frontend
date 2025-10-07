<template>
    <div>
        <div class="title flex justify-between">
            <div>
                <h1>Produtos</h1>
                <p>Gerencie seu catálogo de produtos</p>
            </div>

            <div>
                <button>Ver Loja</button>
                <button>+ Novo Produto</button>
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
                        <option value="teste">teste</option>
                    </select>

                    <select name="" id="">
                        <option value="teste">teste</option>
                        <option value="teste">teste</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="card-product-list bg-[#F5F7FB]">
            <div>
                <h1>Produtos (x)</h1>
                <div>
                    <table class="table-auto w-full text-left">
                            <thead>
                                <tr class="flex justify-between space-x-8">
                                    <th class="color-[#7E7979] font-thin">Produto</th>
                                    <th class="color-[#7E7979] font-thin">Categoria</th>
                                    <th class="color-[#7E7979] font-thin">Preço</th>
                                    <th class="color-[#7E7979] font-thin">Estoque</th>
                                    <th class="color-[#7E7979] font-thin">Status</th>
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