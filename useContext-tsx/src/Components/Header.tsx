import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <header>
      <p>{context.data?.nome}</p>
    </header>
  );
};

export default Header;
