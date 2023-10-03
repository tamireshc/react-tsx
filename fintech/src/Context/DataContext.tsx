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
};

export const DataContext = React.createContext<IDataContext | null>(
  {} as IDataContext
);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVendas[]>(
    "https://data.origamid.dev/vendas"
  );
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
