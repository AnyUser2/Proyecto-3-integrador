import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/computadores",
  headers: {
    "Content-Type": "application/json"
  }
});

export const getComputadores = () => API.get("");

export const getComputador = (id) => API.get(`/${id}`);

export const crearComputador = (data) => API.post("", data);

export const actualizarComputador = (id, data) => API.put(`/${id}`, data);

export const eliminarComputador = (id) => API.delete(`/${id}`);

export const venderComputador = (id) => API.put(`/${id}/vender`);

export const buscarPorMarca = (marca) => API.get(`/marca/${marca}`);