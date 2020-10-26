import axios from "axios";

const API = axios.create({
  baseURL: 'https://involve-it.com/test_front/api',
});


export default API