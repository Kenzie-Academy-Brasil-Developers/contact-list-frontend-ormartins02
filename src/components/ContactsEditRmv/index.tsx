import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { formContactSchema } from "../../schemas/formSchema";
import { AuthContext } from "../../context/AuthContext";
import { ButtonStyle } from "../Button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { InputStyle } from "../Input/style";
import { IContacts } from "../../interfaces"
import { Section } from "./styles";
import { useForm } from "react-hook-form";

export const ContactsEditRmv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContacts>({
    resolver: yupResolver(formContactSchema),
  });

  const { setContactsEditRmvModal, handleContactsEdit, handleContactsRmv } =
    useContext(AuthContext);

  const { actualContacts } = useContext(AuthContext);
  const { id, name, email, phone } = actualContacts;

  return (
    <Section>
      <div id="divTechRegister">
        <button id="closeModal" onClick={() => setContactsEditRmvModal(false)}>
          x
        </button>
        <h2>Editar Contato</h2>
        <form onSubmit={handleSubmit(handleContactsEdit)}>
          <label htmlFor="name">Nome</label>
          <InputStyle
            placeholder="Nome"
            id={`${id}`}
            value={`${name}`}
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Nome</label>
          <InputStyle
            id={`${id}`}
            value={`${email}`}
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
          <label htmlFor="phone">Nome</label>
          <InputStyle
            id={`${id}`}
            value={`${phone}`}
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <div id="divButtons">
            <ButtonStyle
              onSubmit={handleSubmit(handleContactsEdit)}
              id="edit"
              title="Editar Tecnologia"
            >
              <FaEdit />
            </ButtonStyle>
            <ButtonStyle
              onClick={handleSubmit(handleContactsRmv)}
              id="trash"
              title="Remover Tecnologia"
            >
              <FaTrashAlt />
            </ButtonStyle>
          </div>
        </form>
      </div>
    </Section>
  );
};
