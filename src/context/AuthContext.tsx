// import { useEffect } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  toastFail,
  toastFailTechRegister,
  toastSuccesContactsRmv,
  toastSuccesLogin,
  toastSuccesRegister,
  toastSuccesContactsEdit,
  toastSuccesContactsRegister,
  toastSuccesUserEdit,
  toastLoginAgain,
  toastSuccesUserDelete,
} from "../components/Toast";
import api from "../services/api";
import { 
  IContacts, 
  ISetActualContacts, 
  ISubmitRegisterContacts, 
  IUserData, 
  IUserLogin, 
  IUserRegister, 
  IhandleContactEdit,
  IUserUpdate,
  IContactsUpdate, 
} from "../interfaces"


interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContext {
  onSubmitLoginFunction: (data: IUserLogin) => void;
  onSubmitRegisterFunction: (data: IUserRegister) => void;
  onSubmitRegisterContactsFunction: (data: ISubmitRegisterContacts) => void;
  handleContactsEdit: (data: IContactsUpdate) => void;
  handleUserEdit: (data: IUserUpdate) => void;
  handleUserDelete: () => void;
  handleContactsRmv: () => void;
  logout: () => void;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  setActualContacts: React.Dispatch<React.SetStateAction<ISetActualContacts>>;
  setContactsAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setContactsEditRmvModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuAccountEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuAccountDeleteModal:React.Dispatch<React.SetStateAction<boolean>>;
  userData: IUserData;
  loading: boolean;
  contactsAddModal: boolean;
  contactsEditRmvModal: boolean;
  menuAccountModal: boolean;
  menuAccountEditModal: boolean;
  menuAccountDeleteModal: boolean;
  contactsList: IContacts[];
  actualContacts: ISetActualContacts;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [userData, setUserData] = useState<IUserData>({} as IUserData);
  const [loading, setLoading] = useState(true);
  const [contactsAddModal, setContactsAddModal] = useState(false);
  const [contactsEditRmvModal, setContactsEditRmvModal] = useState(false);
  const [menuAccountModal, setMenuAccountModal] = useState(false);
  const [menuAccountEditModal, setMenuAccountEditModal] = useState(false);
  const [menuAccountDeleteModal, setMenuAccountDeleteModal] = useState(false);
  const [contactsList, setContactsList] = useState<IContacts[]>([] as IContacts[]);
  const [newContactsList, setNewContactsList] = useState<IContacts[]>([] as IContacts[]);
  const [newUserData, setNewUserData] = useState<IUserData>({} as IUserData)
  const [actualContacts, setActualContacts] = useState<ISetActualContacts>(
    {} as ISetActualContacts
  );

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@ContactList-token");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          navigate("/Dashboard", { replace: true });
          setUserData(data);
          setContactsList(data.contacts);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [navigate]);

  useEffect(() => {
    setContactsList(newContactsList);
  }, [newContactsList]);

  useEffect(() => {
    setUserData(newUserData);
  }, [newUserData]);

  const onSubmitLoginFunction = async (data: IUserLogin) => {
    await api
      .post("/session", { ...data })
      .then((response) => {
        const { token } = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem("@ContactList-token", token);
        navigate("/Dashboard", { replace: true });
        toastSuccesLogin();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      });
  };

  const onSubmitRegisterFunction = async (data: IUserRegister) => {

    await api
      .post("/users", { ...data })
      .then((res) => {
        toastSuccesRegister();
      })
      .catch((res) => {
        console.error(res);
        toastFail();
      });
    navigate("../");
  };

  const handleUserEdit = async (data: IUserUpdate) => {
    const { id } = userData;

    await api.patch(`/users/${id}`, { ...data }).then((res) => {

      setUserData(res.data)
      toastSuccesUserEdit();
      if (data.email){
        
        navigate("/", { replace: true });
        toastLoginAgain();
      }
    }).catch((res) => {
      console.error(res);
      toastFail();
    });
  };

  const handleUserDelete = async () => {
    const { id } = userData;
    await api.delete(`/users/${id}`).then(() => {
      setMenuAccountDeleteModal(false);
      logout();
      toastSuccesUserDelete();
    }).catch((res) => {
      console.error(res);
      toastFail();
    });
  };

  const onSubmitRegisterContactsFunction = async (data: ISubmitRegisterContacts) => {
    await api
      .post("/contacts", {...data})
      .then((res) => {
      console.log(res.data)
      setNewContactsList([...contactsList, res.data]);
      toastSuccesContactsRegister();
      setContactsAddModal(false);
      })
      .catch((res) => {
        console.error(res);
        toastFailTechRegister();
      });
  };

  const actContactsList = async () => {
    const token = localStorage.getItem("@ContactList-token");
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setNewContactsList(data.contacts);
        } catch (error) {
          console.log(error);
          navigate("/", { replace: true });
        } finally {
        }
  };

  const handleContactsEdit = async (data: IContactsUpdate) => {
    const { id } = actualContacts;

    await api.patch(`/contacts/${id}`, { ...data }).then((res) => {
      actContactsList();
      setContactsEditRmvModal(false);
      toastSuccesContactsEdit();
    });
  };

  const handleContactsRmv = async () => {
    const { id } = actualContacts;
    await api.delete(`/contacts/${id}`).then((res) => {
      console.log(res.data)

      const newList = contactsList.filter((elem) => elem.id !== id);
      setNewContactsList(newList);
      toastSuccesContactsRmv();
      setContactsEditRmvModal(false);
    });
  };

  function logout() {
    localStorage.clear();
    navigate("/", { replace: true });
  }

  return (
    <AuthContext.Provider
      value={{
        logout,
        loading,
        userData,
        setUserData,
        contactsList,
        handleUserEdit,
        actualContacts,
        contactsAddModal,
        menuAccountModal,
        handleUserDelete,
        handleContactsRmv,
        setActualContacts,
        handleContactsEdit,
        setContactsAddModal,
        setMenuAccountModal,
        menuAccountEditModal, 
        contactsEditRmvModal,
        onSubmitLoginFunction,
        menuAccountDeleteModal, 
        setMenuAccountEditModal,
        setContactsEditRmvModal,
        onSubmitRegisterFunction,
        setMenuAccountDeleteModal,
        onSubmitRegisterContactsFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
