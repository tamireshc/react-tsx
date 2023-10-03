import React from "react";
import "../App.css";
import DateInput from "./DateInput";
import { DataContext } from "../Context/DataContext";

const DateRange = () => {

  const { inicio, final, setInicio, setFinal } = React.useContext(DataContext)

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
