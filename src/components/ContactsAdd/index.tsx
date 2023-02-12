import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Section } from "./styles";
import { ButtonAddContacts } from "../Button";
import { formContactSchema } from "../../schemas/formSchema";
import { InputStyle } from "../Input/style";
import { ISubmitRegisterContacts } from "../../interfaces"

export const ContactsAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitRegisterContacts>({
    resolver: yupResolver(formContactSchema),
  });

  const { onSubmitRegisterContactsFunction, setContactsAddModal } =
    useContext(AuthContext);

  return (
    <Section>
      <div id="divTechRegister">
        <button id="closeModal" onClick={() => setContactsAddModal(false)}>
          x
        </button>
        <h2>Cadastrar Contato</h2>
        <form action="" onSubmit={handleSubmit(onSubmitRegisterContactsFunction)}>
          <label htmlFor="name">Nome</label>
          <InputStyle id="name" {...register("name")} />
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <InputStyle id="email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <label htmlFor="phone">Nome</label>
          <InputStyle placeholder="DDD 5555-5555" id="phone" {...register("phone")} />
          <span>{errors.phone?.message}</span>
          <ButtonAddContacts />
        </form>
      </div>
    </Section>
  );
};
