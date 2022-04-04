import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = 'http://localhost:3000/categories';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = 'http://localhost:3000/categories/' + id;
    return axiosClient.get(url);
  },
  add(data) {
    const url = 'http://localhost:3000/categories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = 'http://localhost:3000/categories/';
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = 'http://localhost:3000/categories/' + id;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
