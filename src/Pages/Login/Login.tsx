import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { formLoginSchema } from "../../schemas/formSchema";
import { Section } from "./style";
import { IUserLogin } from "../../interfaces"

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formLoginSchema),
  });

  const { onSubmitLoginFunction } = useContext(AuthContext);

  return (
    <Section>
      <h1 className="text-3xl">Contact List</h1>
      <div className="divform-login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitLoginFunction)}>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")}/>
          <span>{errors.email?.message}</span>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")}/>
          <span>{errors.password?.message}</span>
          <button>Entrar</button>
        </form>
        <br/>
        <p>Ainda não é cadastrado?</p>
        <button onClick={() => navigate("/Register")}>Cadastre-se</button>
      </div>
    </Section>
  );
};
