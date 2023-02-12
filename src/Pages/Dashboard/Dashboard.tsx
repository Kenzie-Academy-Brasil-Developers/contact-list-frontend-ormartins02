import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ButtonExit } from "../../components/Button";
import { ContactsAdd } from "../../components/ContactsAdd";
import { ContactsEditRmv } from "../../components/ContactsEditRmv";
import { ContactsList } from "../../components/ContactsList";
import { AuthContext } from "../../context/AuthContext";
import { DivHeader } from "./style.Home";


export const Dashboard = () => {
  const { userData, contactsAddModal, contactsEditRmvModal } = useContext(AuthContext);

  return userData ? (
    <DivHeader>
      <div id="headerHome">
        <h1>Contact List</h1>
        <ButtonExit />
      </div>
      <hr />
      <div id="userHome">
        <h2>Olá, {userData.name}</h2>
      </div>
      <hr />
      <ContactsList />
      {contactsAddModal ? <ContactsAdd /> : <></>}
      {contactsEditRmvModal ? <ContactsEditRmv /> : <></>}
    </DivHeader>
  )
  :(
    <Navigate to="/" replace />
  );
};
