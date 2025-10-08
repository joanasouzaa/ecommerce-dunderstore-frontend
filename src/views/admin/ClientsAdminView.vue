<template>
    <div>
        <div class="title flex justify-between">
            <div>
                <h1>Clientes</h1>
                <p>Gerencie os clientes cadastrados na sua loja</p>
            </div>

            <div>
                <button>Ver Loja</button>
            </div>
        </div>

        <div class="card-clients">
            <div>
                <div class="search-client">
                    <h3>Lista de Clientes</h3>
                    <p>Visualize e gerencie todos os clientes cadastrados</p>
                </div>
                <div class="search-area">
                    <!-- icon lupa -->
                    <span>Buscar por nome ou e-mail</span>
                </div>
            </div>


            <div class="client-list">
                <table class="table-auto w-full text-left">
                    <thead>
                        <tr class="flex justify-between space-x-8">
                            <th class="color-[#7E7979] font-thin">Cliente</th>
                            <th class="color-[#7E7979] font-thin">Contato</th>
                            <th class="color-[#7E7979] font-thin">Cadastro</th>
                            <th class="color-[#7E7979] font-thin">Pedidos</th>
                            <th class="color-[#7E7979] font-thin">Ações</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>