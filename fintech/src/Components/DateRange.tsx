import React from "react";
import "../App.css";
import DateInput from "./DateInput";

const DateRange = () => {
  const [incio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={incio}
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
