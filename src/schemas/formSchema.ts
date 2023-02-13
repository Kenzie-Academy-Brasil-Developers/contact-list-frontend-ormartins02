import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup.string().min(6, "No minimo 6 digitos").required(),
});

export const formRegisterSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    password: yup.string().min(6, "No minimo 6 digitos").required(),
    phone: yup.string().required('Telefone é obrigatório'),
});

export const formContactSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email é obrigatório').email('Email inválido'),
    phone: yup.string().required('Telefone é obrigatório'),
});

export const formContactUpdateSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('Email inválido'),
    phone: yup.string()
});

export const formUpdateUserSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('Email inválido'),
    password: yup.string(),
    phone: yup.string(),
});
