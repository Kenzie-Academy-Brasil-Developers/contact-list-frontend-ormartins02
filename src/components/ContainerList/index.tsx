import { DivContainer } from "./styles";
import { ButtonOpenModalContacts } from "../Button";
import { ContactsList } from "../ContactsList";

export const ConatinerList = () => {
  return (
    <DivContainer>
      <div id="divHeaderTech">
        <h2>Contatos</h2>
        <ButtonOpenModalContacts></ButtonOpenModalContacts>
      </div>
      <div>
        <ContactsList />
      </div>
    </DivContainer>
  );
};
