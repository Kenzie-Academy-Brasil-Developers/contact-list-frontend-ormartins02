import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Contact, List } from "./styles";
import { ButtonAddContacts } from "../Button";
import { DivListHeader } from "../../Pages/Dashboard/style.Home";

export const ContactsList = () => {
  const { contactsList, setActualContacts, setContactsEditRmvModal } =
    useContext(AuthContext);

  return (
    <>
      <DivListHeader>
        <h3> Meus contatos</h3>
        <ButtonAddContacts />
      </DivListHeader>
      <List id="listContainer">
        {contactsList.length === 0 ? (<>
          <h3 id="emptyList" key={"1"}>
            Não possui nenhuma contato cadastrado
          </h3>
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
                  <p>Nome: {elem.name}</p>
                  <p>Email: {elem.email}</p>
                  <p>Telefone: {elem.phone}</p>
                  <p hidden>Adicionado em: {elem.createdAt}</p>
                </div>
              </Contact>
            );
          })
        )}
      </List>
    </>
  );
};
