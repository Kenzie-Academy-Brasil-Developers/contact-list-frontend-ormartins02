import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { formContactSchema, formContactUpdateSchema } from "../../schemas/formSchema";
import { AuthContext } from "../../context/AuthContext";
import { ButtonStyle } from "../Button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { InputStyle } from "../Input/style";
import { IContacts, IContactsUpdate } from "../../interfaces"
import { Section } from "./styles";
import { useForm } from "react-hook-form";

export const ContactsEditRmv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactsUpdate>({
    resolver: yupResolver(formContactUpdateSchema),
  });

  const { setContactsEditRmvModal, handleContactsEdit, handleContactsRmv } =
    useContext(AuthContext);

  const { actualContacts } = useContext(AuthContext);
  const { id, name, email, phone } = actualContacts;

  return (
    <Section>
      <div id="divContactRegister">
        <button id="closeModal" onClick={() => setContactsEditRmvModal(false)}>
          x
        </button>
        <h2>Editar Contato</h2>
        <form onSubmit={handleSubmit(handleContactsEdit)}>
          <label htmlFor="name">Nome</label>
          <InputStyle
            id={`${id}`}
            placeholder={name}
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <InputStyle
            id={`${id}`}
            placeholder={email}
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="phone">Telefone</label>
          <InputStyle
            id={`${id}`}
            placeholder={phone}
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <div id="divButtons">
            <ButtonStyle
              onSubmit={handleSubmit(handleContactsEdit)}
              id="edit"
            >
              Editar
            </ButtonStyle>
            <ButtonStyle
              onClick={handleSubmit(handleContactsRmv)}
              id="trash"
            >
              Deletar
            </ButtonStyle>
          </div>
        </form>
      </div>
    </Section>
  );
};
