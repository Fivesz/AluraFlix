import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import NovoVideo from "./paginas/NovoVideo";
import Header from "./componentes/Header";
import EditarCard from "paginas/Editar";
import Footer from "componentes/Footer";

function AppRoutes() {
  const categorias = [
    {
      categoria: "Front End",
      corPrimaria: "#6bd1ff",
    },
    {
      categoria: "Back End",
      corPrimaria: "#00c86f",
    },
    {
      categoria: "Mobile",
      corPrimaria: "#ffba05",
    },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio categorias={categorias} />} />
        <Route
          path="/novovideo"
          element={<NovoVideo categorias={categorias} />}
        />
        <Route path="/edit/:id" element={<EditarCard />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
