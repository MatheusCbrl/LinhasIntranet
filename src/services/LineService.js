import http from '../http-common';

const getAll = () => {
return http.get('/line');

};

const get = (id) => {
  return http.get(`/line/${id}`);
};

const create = (data) => {
  return http.post('/line', data);
};

const update = (id, data) => {
  return http.put(`/line/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/line/${id}`);
};

const removeAll = () => {
  return http.delete(`/line`);
};
const importLines = () => {
  return http.post(`/line/import`);
};

const findByName = (linha) => {
  return http.get(`/line?linha=${linha}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
  importLines
};
