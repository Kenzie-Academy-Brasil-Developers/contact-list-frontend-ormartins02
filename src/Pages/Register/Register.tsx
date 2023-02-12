import { Section } from "../Login/style"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../schemas/formSchema";
import { IUserRegister } from "../../interfaces";

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formRegisterSchema),
  });

  const { onSubmitRegisterFunction } = useContext(AuthContext)

  return (
    <Section>
      <h1>Contact List</h1>
      <div className="divform-register">
        <div id="div-title-register">
          <h2>Cadastro</h2>
          <button id="out-button" onClick={()=> navigate("/")}>Voltar</button>
        </div>
        <form onClick={handleSubmit(onSubmitRegisterFunction)}>
          <label htmlFor="name">Nome</label>
          <input id="name" {...register("name")}/>
          <span>{errors.name?.message}</span>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")}/>
          <span>{errors.email?.message}</span>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")}/>
          <span>{errors.password?.message}</span>
          <label htmlFor="phone">Telefone</label>
          <input id="phone" {...register("phone")}/>
          <span>{errors.phone?.message}</span>
          <button>Cadastrar</button>
        </form>
      </div>
  </Section>
  );
};
