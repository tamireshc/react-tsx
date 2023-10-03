import React from "react";
import useFetch from "../Hooks/useFetch";

type IVendas = {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  pagamento: "cartao" | "pix" | "boleto";
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: null | IVendas[];
  loading: boolean;
  error: null | string;
  inicio: string
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>
  setFinal: React.Dispatch<React.SetStateAction<string>>
};

export const DataContext = React.createContext<IDataContext>(
  {} as IDataContext
);

const getDate = (n: number) => {
  const date = new Date()
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, "0")
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const yyyy = String(date.getFullYear())
  return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(20));
  const [final, setFinal] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<IVendas[]>(
    `https://data.origamid.dev/vendas?inicio=${inicio}&final=${final}`
  );
  return (
    <DataContext.Provider value={{ data, loading, error, inicio, final, setInicio, setFinal }}>
      {children}
    </DataContext.Provider>
  );
};
