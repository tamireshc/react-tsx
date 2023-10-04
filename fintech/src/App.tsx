import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidenav />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Resumo />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/venda/:id" element={<Venda />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
