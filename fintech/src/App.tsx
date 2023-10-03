import "./App.css";
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";

function App() {
  return (
    <div className="container">
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  );
}

export default App;
