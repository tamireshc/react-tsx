import React from "react";
import useFetch from "../Hooks/usefetch";

export type dataType = {
  id: string;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};

type contextType = {
  data: dataType | null;
  loading: boolean;
  error: string | null;
};

export const UserContext = React.createContext<contextType>({} as contextType);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<dataType>(
    "https://data.origamid.dev/usuarios/1",
    {
      method: "GET",
    }
  );

  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
