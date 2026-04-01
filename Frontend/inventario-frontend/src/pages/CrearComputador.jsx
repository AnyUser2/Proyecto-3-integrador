import { useState } from "react";
import { crearComputador } from "../api/computadorApi";
import { useNavigate } from "react-router-dom";

function CrearComputador() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    procesador: "",
    ram: "",
    almacenamiento: "",
    estadoFisico: "",
    descripcion: "",
    precio: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const guardar = async (e) => {
    e.preventDefault();
    await crearComputador(form);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registrar Computador</h2>

      <form onSubmit={guardar}>
        <input name="marca" placeholder="Marca" onChange={handleChange} /><br />
        <input name="modelo" placeholder="Modelo" onChange={handleChange} /><br />
        <input name="procesador" placeholder="Procesador" onChange={handleChange} /><br />
        <input name="ram" placeholder="RAM" onChange={handleChange} /><br />
        <input name="almacenamiento" placeholder="Almacenamiento" onChange={handleChange} /><br />
        <input name="estadoFisico" placeholder="Estado físico" onChange={handleChange} /><br />
        <input name="descripcion" placeholder="Descripción" onChange={handleChange} /><br />
        <input name="precio" type="number" placeholder="Precio" onChange={handleChange} /><br />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CrearComputador;