import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { formUpdateUserSchema } from "../../schemas/formSchema";
import { IUserUpdate } from "../../interfaces";
import { Section } from "./styles";

export const AccountEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(formUpdateUserSchema),
  });

  const { handleUserEdit, setMenuAccountEditModal } =
    useContext(AuthContext);

  return (
    <Section >
      <div id="divAccountEdit">
        <button id="closeModal" onClick={() => setMenuAccountEditModal(false)}>
          x
        </button>
        <h2>Editar perfil</h2>
        <form onSubmit={handleSubmit(handleUserEdit)}>
          <label htmlFor="name">Nome</label>
          <input id="name" {...register("name")} />
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
          <span>{errors.email?.message}</span>
          <label htmlFor="phone">Telefone</label>
          <input id="phone" {...register("phone")} />
          <span>{errors.phone?.message}</span>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")}/>
          <span>{errors.password?.message}</span>
          <button id="save-button">Salvar</button>
        </form>
      </div>
    </Section>
  );
};
