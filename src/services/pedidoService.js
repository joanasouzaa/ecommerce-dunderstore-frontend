// src/services/pedidoService.js
import api from "./api"; // usa o axios já configurado

const getAll = async ({ pagina = 1, itensPorPagina = 100 } = {}) => {
  try {
    const response = await api.get("/pedido");
    if (response.status !== 200) throw new Error("Erro ao buscar pedidos");

    const pedidos = response.data;

    // Paginação manual
    const totalItens = pedidos.length;
    const inicio = (pagina - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const pedidosPaginados = pedidos.slice(inicio, fim);

    return {
      pedidos: pedidosPaginados,
      totalItens,
      paginaAtual: pagina,
      totalPaginas: Math.ceil(totalItens / itensPorPagina),
    };
  } catch (error) {
    console.error("Erro em pedidoService.getAll:", error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const response = await api.get(`/pedido/${id}`);
    if (response.status !== 200) throw new Error("Pedido não encontrado");
    return response.data;
  } catch (error) {
    console.error("Erro em pedidoService.getById:", error);
    throw error;
  }
};

const getByCliente = async (clienteId, status) => {
  try {
    const params = {};
    if (status) params.status = status;

    const response = await api.get(`/pedido/cliente/${clienteId}`, { params });
    if (response.status !== 200) throw new Error("Pedidos não encontrados");
    return response.data;
  } catch (error) {
    console.error("Erro em pedidoService.getByCliente:", error);
    throw error;
  }
};

// Para dashboard: calcular receita mensal
const getReceitaMensal = async () => {
  try {
    const { pedidos } = await getAll();
    const mesAtual = new Date().getMonth();
    const pedidosPagosMesAtual = pedidos.filter((p) => {
      const data = new Date(p.dataPedido);
      return p.status === "Finalizado" && data.getMonth() === mesAtual;
    });

    const receita = pedidosPagosMesAtual.reduce(
      (acc, p) => acc + Number(p.total),
      0
    );
    return receita;
  } catch (error) {
    console.error("Erro em pedidoService.getReceitaMensal:", error);
    return 0;
  }
};

export default {
  getAll,
  getById,
  getByCliente,
  getReceitaMensal,
};
