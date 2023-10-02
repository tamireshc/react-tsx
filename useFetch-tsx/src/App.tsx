/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import useFetch from "./Hooks/useFetch";

type valuesType = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

function App() {
  const values = useFetch<valuesType[]>("https://data.origamid.dev/produtos", {
    method: "GET",
  });

  return (
    <>
      {values.data &&
        values.data?.map((item: valuesType) => (
          <ul key={item.id}>
            <li>{item.nome}</li>
            <li>{item.preco}</li>
            <li>{item.quantidade}</li>
            <li>{item.descricao}</li>
          </ul>
        ))}
    </>
  );
}

export default App;
