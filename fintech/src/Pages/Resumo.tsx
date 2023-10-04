import React from "react";
import { DataContext } from "../Context/DataContext";

const Resumo = () => {
  const { data } = React.useContext(DataContext);
  if (data == null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data &&
              data
                .filter((item) => item.status != "falha")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
          </span>
        </div>
        <div className="box">
          <h2>Recebidos</h2>
          <span>
            {data &&
              data
                .filter((item) => item.status == "pago")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data &&
              data
                .filter((item) => item.status == "processando")
                .reduce((acc, item) => acc + item.preco, 0)
                .toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })}
          </span>
        </div>
      </div>
      <div className="box mb">graficos</div>
    </section>
  );
};

export default Resumo;
