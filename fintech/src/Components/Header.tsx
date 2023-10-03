import React from "react";
import { DataContext } from "../Context/DataContext";
import DateRange from "./DateRange";

const Header = () => {
  const context = React.createContext(DataContext);
  return (
    <div>
      <DateRange />
    </div>
  );
};

export default Header;
