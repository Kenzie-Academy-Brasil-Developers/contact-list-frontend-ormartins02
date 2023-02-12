import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Contact, List } from "./styles";
import { ButtonAddContacts } from "../Button";

export const ContactsList = () => {
  const { contactsList, setActualContacts, setContactsEditRmvModal } =
    useContext(AuthContext);

  return (
    <List id="listContainer">
      {contactsList.length === 0 ? (<>
        <h3 id="emptyList" key={"1"}>
          Não possui nenhuma contato cadastrado
        </h3>
        <ButtonAddContacts />
        </>
      ) : (
        contactsList.map((elem) => {
          return (
            <Contact
              key={elem.id}
              id="listCard"
              title="Clique para editar esta Tech"
              onClick={() => {
                setActualContacts({
                  id: elem.id,
                  name: elem.name,
                  email: elem.email,
                  phone: elem.phone,
                  createdAt: elem.createdAt
                });
                setContactsEditRmvModal(true);
              }}
            >
              <div id="divCard">
                <h3>Nome: {elem.name}</h3>
                <span>Email: {elem.email}</span>
                <span>Telefone: {elem.phone}</span>
                <span>Adicionado em: {elem.createdAt}</span>
              </div>
            </Contact>
          );
        })
      )}
    </List>
  );
};
