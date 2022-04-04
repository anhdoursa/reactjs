import axiosClient from './axiosClient';

const productApi = {
  getAll(params) {
    const url = 'http://localhost:3000/products';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = 'http://localhost:3000/products' + id;
    return axiosClient.get(url);
  },
  add(data) {
    const url = 'http://localhost:3000/products';
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = 'http://localhost:3000/products' + id;
    return axiosClient.delete(url);
  },
  update(data) {
    const url = 'http://localhost:3000/products';
    return axiosClient.patch(url, data);
  },
};

export default productApi;