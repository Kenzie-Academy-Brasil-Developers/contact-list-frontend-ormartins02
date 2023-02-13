
  
  export interface IContacts {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
  }
  
  export interface IUserData {
    id: string;
    name: string;
    email: string;
    contacts: IContacts[];
    phone: string;
    created_at: string;
  }
  
  export interface IUserLogin {
    email: string;
    password: string;
  }
  
  export interface IUserRegister {
    name: string;
    email: string;
    password: string;
    phone: string;
  }

  export interface IUserUpdate {
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
  }
  
  export interface IContactRegister {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface ISubmitRegisterContacts {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface IhandleContactEdit {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface ISetActualContacts {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
  }
  