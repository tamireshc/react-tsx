import "./App.css";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";

function App() {
  return (
    <div className="container">
      <Sidenav />
      <main>
        <Header />
        <Resumo />
        <Vendas />
      </main>
    </div>
  );
}

export default App;
