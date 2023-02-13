import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Section } from "./styles";

export const MenuProfile = () => {
  const { setMenuAccountModal, setMenuAccountDeleteModal, setMenuAccountEditModal, logout} =
    useContext(AuthContext);

  return (
    <Section onClick={()=>setMenuAccountModal(false)}>
      <ul id="ulMenu">
        <li><button onClick={()=>setMenuAccountEditModal(true)}>Editar</button></li>
        <li><button onClick={logout}>Sair</button></li>
        <hr />
        <li><button id="del" onClick={()=>setMenuAccountDeleteModal(true)}>Deletar</button></li>
      </ul>
    </Section>
  );
};
