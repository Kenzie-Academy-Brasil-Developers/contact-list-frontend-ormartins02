import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AccountDelete } from "../../components/AccountDelete";
import { AccountEdit } from "../../components/AccountEdit";
import { ButtonDropMenuAccount } from "../../components/Button";
import { ContactsAdd } from "../../components/ContactsAdd";
import { ContactsEditRmv } from "../../components/ContactsEditRmv";
import { ContactsList } from "../../components/ContactsList";
import { MenuProfile } from "../../components/MenuProfile";
import { AuthContext } from "../../context/AuthContext";
import { DivHeader } from "./style.Home";


export const Dashboard = () => {
  const { userData, contactsAddModal, contactsEditRmvModal, menuAccountModal, menuAccountEditModal, menuAccountDeleteModal } = useContext(AuthContext);

  return userData ? (
    <DivHeader>
      <div id="headerHome">
        <h1>Contact List</h1>
      </div>
      <hr />
      <div id="userHome">
        <h2>Olá, {userData.name}</h2>
        <ButtonDropMenuAccount />
        {menuAccountModal ? <MenuProfile /> : <></>}
        {menuAccountEditModal ? <AccountEdit /> : <></>}
        {menuAccountDeleteModal ? <AccountDelete /> : <></>}

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
