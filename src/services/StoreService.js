import http from "../httpClient";

class StoreService {
  getAll() {
    return http.get("/stores");
  }

  get(id) {
    return http.get(`/stores/${id}`);
  }

  create(data) {
    return http.post("/stores", data);
  }

  update(id, data) {
    return http.put(`/stores/${id}`, data);
  }

  delete(id) {
    return http.delete(`/stores/${id}`);
  }
}

export default new StoreService();
