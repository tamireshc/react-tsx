import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Content = () => {
  const context = useContext(UserContext);
  return (
    <div>
      {context.data && (
        <ul key={context.data.preferencias.playback}>
          <li>{context.data.preferencias.volume}</li>
          <li>{context.data.preferencias.qualidade}</li>
        </ul>
      )}
    </div>
  );
};

export default Content;
