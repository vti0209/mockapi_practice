import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// CRUD Operations cho Products
export const productAPI = {
  // Read - Lấy tất cả sản phẩm
  getAll: () => api.get('/products'),
  
  // Read - Lấy 1 sản phẩm theo ID
  getById: (id) => api.get(`/products/${id}`),
  
  // Create - Tạo sản phẩm mới
  create: (data) => api.post('/products', data),
  
  // Update - Cập nhật sản phẩm
  update: (id, data) => api.put(`/products/${id}`, data),
  
  // Delete - Xóa sản phẩm
  delete: (id) => api.delete(`/products/${id}`),
};

export default api;