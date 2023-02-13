import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ButtonDropStyle, ButtonSaveStyle, ButtonStyle } from "./style";
import { FaPlus } from "react-icons/fa";



export const ButtonRegister = () => {
  return <ButtonStyle type="submit">Cadastrar</ButtonStyle>;
};

export const ButtonLogin = () => {
  return <ButtonStyle type="submit">Entrar</ButtonStyle>;
};

export const ButtonGoToRegister = () => {
  const navigate = useNavigate();

  return (
    <ButtonStyle onClick={() => navigate("/Register")}>Cadastrar</ButtonStyle>
  );
};

export const ButtonGoToLogin = () => {
  const navigate = useNavigate();

  return <ButtonStyle onClick={() => navigate("/")}>Voltar</ButtonStyle>;
};

export const ButtonExit = () => {
  const { logout } = useContext(AuthContext);

  return <ButtonStyle onClick={logout}>Sair</ButtonStyle>;
};

export const ButtonOpenModalContacts = () => {
  const { setContactsAddModal } = useContext(AuthContext);

  return (
    <ButtonStyle onClick={() => setContactsAddModal(true)}>
      <FaPlus />
    </ButtonStyle>
  );
};

export const ButtonAddContacts = () => {
  const {setContactsAddModal} = useContext(AuthContext)

  return <ButtonStyle onClick={()=>setContactsAddModal(true)}>Cadastrar Contato</ButtonStyle>;
};

export const ButtonDropMenuAccount = () => {
  const { setMenuAccountModal } = useContext(AuthContext)

  return <ButtonDropStyle onClick={()=>setMenuAccountModal(true)}>Meu perfil</ButtonDropStyle>;
};

