import axios from 'axios';

const api = axios.create({
  baseURL: 'https://graduationprojectapi-production-e29d.up.railway.app/api/v1',
//   withCredentials: true,

});

export default api;
