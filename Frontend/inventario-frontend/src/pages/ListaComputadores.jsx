import { useEffect, useState } from "react";
import {
  getComputadores,
  eliminarComputador,
  venderComputador
} from "../api/computadorApi";

function ListaComputadores() {
  const [computadores, setComputadores] = useState([]);

  const cargar = async () => {
    const res = await getComputadores();
    setComputadores(res.data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const eliminar = async (id) => {
    await eliminarComputador(id);
    cargar();
  };

  const vender = async (id) => {
    await venderComputador(id);
    cargar();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inventario</h2>

      {computadores.map((c) => (
        <div key={c.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{c.marca} {c.modelo}</h3>
          <p>CPU: {c.procesador}</p>
          <p>RAM: {c.ram}</p>
          <p>Precio: ${c.precio}</p>
          <p>Estado: {c.estadoVenta}</p>

          <button onClick={() => vender(c.id)}>Vender</button>
          <button onClick={() => eliminar(c.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default ListaComputadores;