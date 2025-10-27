// src/services/categoriaService.js
import api from "./api"; // usa o axios configurado com baseURL

// Pega todas as categorias
const getAll = async () => {
  try {
    const response = await api.get("/categoria");
    if (response.status !== 200) throw new Error("Erro ao buscar categorias");

    // Transformar dados para sua view
    return response.data.map((c) => ({
      id: c.id,
      nomeCategoria: c.nome,
      slugCategoria: slugify(c.nome),
      totalProdutos: c.totalProdutos || 0, // se não houver total no backend, usar 0
      status: c.status || "Ativa", // pode ajustar conforme seu modelo
    }));
  } catch (error) {
    console.error("Erro em categoriaService.getAll:", error);
    return [];
  }
};

// Pega categoria por ID
const getById = async (id) => {
  try {
    const response = await api.get(`/categoria/${id}`);
    if (response.status !== 200) throw new Error("Categoria não encontrada");

    return {
      id: response.data.id,
      nomeCategoria: response.data.nome,
      slugCategoria: slugify(response.data.nome),
      totalProdutos: response.data.totalProdutos || 0,
      status: response.data.status || "Ativa",
    };
  } catch (error) {
    console.error("Erro em categoriaService.getById:", error);
    throw error;
  }
};

// Criar categoria
const create = async (dto) => {
  try {
    const formData = new FormData();
    formData.append("nome", dto.nome);
    if (dto.categoriaPaiId) formData.append("categoriaPaiId", dto.categoriaPaiId);

    const response = await api.post("/categoria", formData);
    return response.data;
  } catch (error) {
    console.error("Erro em categoriaService.create:", error);
    throw error;
  }
};

// Atualizar categoria
const update = async (id, dto) => {
  try {
    const formData = new FormData();
    if (dto.nome) formData.append("nome", dto.nome);
    if (dto.categoriaPaiId) formData.append("categoriaPaiId", dto.categoriaPaiId);

    await api.patch(`/categoria/${id}`, formData);
    return true;
  } catch (error) {
    console.error("Erro em categoriaService.update:", error);
    throw error;
  }
};

// Deletar categoria
const remove = async (id) => {
  try {
    await api.delete(`/categoria/${id}`);
    return true;
  } catch (error) {
    console.error("Erro em categoriaService.remove:", error);
    throw error;
  }
};

// Função auxiliar para criar slug
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
