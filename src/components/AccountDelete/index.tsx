import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Section } from "./styles";

export const AccountDelete = () => {

  const { handleUserDelete, setMenuAccountDeleteModal } =
    useContext(AuthContext);

  return (
    <Section >
      <div id="modal">
        <div id="divAccountDelete">
          <h2>Atenção!!!</h2>
          <p>Clicando em OK você excluirá definitivamente sua conta e seus contatos.</p>
        </div>
        <div id="div-buttons">
          <button id="button-delete" onClick={handleUserDelete}>Deletar</button>
          <button id="button-cancel" onClick={()=>{setMenuAccountDeleteModal(false)}}>Cancelar</button>
        </div>
      </div>
    </Section>
  );
};
