import toast from "react-hot-toast";

export const toastSuccesLogin = () =>
  toast.success(" Login efetuado com sucesso! ", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesRegister = () =>
  toast.success("Usuário registrado com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesContactsRegister = () =>
  toast.success("Contato adicionado com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesContactsRmv = () =>
  toast.success("Contato removido com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesContactsEdit = () =>
  toast.success("Tecnologia Atualizada com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFail = () =>
  toast.error("Ops! Algo deu errado", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFailTechRegister = () =>
  toast.error("Esta Tecnologia já existe, tente atualizar o status dela.", {
    duration: 5200,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
