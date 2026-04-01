import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaComputadores from "./pages/ListaComputadores";
import CrearComputador from "./pages/CrearComputador";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListaComputadores />} />
        <Route path="/crear" element={<CrearComputador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;