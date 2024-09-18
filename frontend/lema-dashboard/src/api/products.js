import axios from "axios";

const API = 'http://localhost:4000/api'


export const preciosRequest = (user) => axios.get(`${API}/productos`, user);
// export const loginRequest = (user) => axios.post(`${API}/login`, user)