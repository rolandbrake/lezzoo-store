import http from "../httpClient";

class CategoryService {
  getAll(storeId) {
    return http.get(`/categories/${storeId}`);
  }

  get(id) {
    return http.get(`/categories/${id}`);
  }

  create(data) {
    return http.post("/categories", data);
  }

  update(id, data) {
    return http.put(`/categories/${id}`, data);
  }

  delete(id) {
    return http.delete(`/categories/${id}`);
  }
}

export default new CategoryService();
