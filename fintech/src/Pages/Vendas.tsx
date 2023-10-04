import React from "react";
import VendaItem from "../Components/VendaItem";
import { DataContext, IVendas } from "../Context/DataContext";

const Vendas = () => {
  const { data } = React.useContext(DataContext);
  return (
    <ul>
      {data &&
        data.map((item: IVendas) => (
          <li key={item.id}>
            <VendaItem venda={item} />
          </li>
        ))}
      Vendas
    </ul>
  );
};

export default Vendas;
