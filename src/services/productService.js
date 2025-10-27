// src/services/productService.js

const API_URL = "https://localhost:7136/api/produto";

async function getAll({
  nome,
  cor,
  tamanho,
  categoria,
  pagina = 1,
  itensPorPagina = 10,
} = {}) {
  try {
    const params = new URLSearchParams({
      ...(nome && { nome }),
      ...(cor && { cor }),
      ...(tamanho && { tamanho }),
      ...(categoria && { categoria }),
      pagina,
      itensPorPagina,
    });

    const response = await fetch(`${API_URL}?${params.toString()}`, {
      credentials: "include",
    });

    if (!response.ok) throw new Error("Erro ao buscar produtos");

    const data = await response.json();

    // 🔹 Retorna estrutura padronizada pro componente de listagem
    return {
      produtos: data.itens || [],
      paginaAtual: data.paginaAtual || 1,
      totalPaginas: data.totalPaginas || 1,
      totalItens: data.totalItens || (data.itens?.length ?? 0),
    };
  } catch (error) {
    console.error("Erro em productService.getAll:", error);
    throw error;
  }
}

async function getById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { credentials: "include" });
    if (!response.ok) throw new Error("Erro ao buscar produto");
    return await response.json();
  } catch (error) {
    console.error("Erro em productService.getById:", error);
    throw error;
  }
}

async function create(formData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) throw new Error("Erro ao criar produto");
    return await response.json();
  } catch (error) {
    console.error("Erro em productService.create:", error);
    throw error;
  }
}

async function update(id, formData) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      body: formData,
      credentials: "include",
    });
    if (!response.ok) throw new Error("Erro ao atualizar produto");
    return true;
  } catch (error) {
    console.error("Erro em productService.update:", error);
    throw error;
  }
}

async function remove(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!response.ok) throw new Error("Erro ao deletar produto");
    return true;
  } catch (error) {
    console.error("Erro em productService.remove:", error);
    throw error;
  }
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
