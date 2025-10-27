import axios from "axios";

// URL base da sua API
const API_BASE_URL = "https://localhost:7136/api/Cliente";

export default {
  // Buscar todos os clientes
  async getAllClientes() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      return [];
    }
  },

  // Buscar cliente por ID
  async getClienteById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cliente ${id}:`, error);
      return null;
    }
  },

  // Criar novo cliente
  async createCliente(clienteData) {
    try {
      const formData = new FormData();
      Object.keys(clienteData).forEach(key =>
        formData.append(key, clienteData[key])
      );
      const response = await axios.post(API_BASE_URL, formData);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      return null;
    }
  },

  // Atualizar cliente existente
  async updateCliente(id, clienteData) {
    try {
      const formData = new FormData();
      Object.keys(clienteData).forEach(key =>
        formData.append(key, clienteData[key])
      );
      await axios.patch(`${API_BASE_URL}/${id}`, formData);
      return true;
    } catch (error) {
      console.error(`Erro ao atualizar cliente ${id}:`, error);
      return false;
    }
  },

  // Deletar cliente
  async deleteCliente(id) {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      return true;
    } catch (error) {
      console.error(`Erro ao deletar cliente ${id}:`, error);
      return false;
    }
  }
};
