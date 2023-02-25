import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const list = [
  { id: 1, name: "Juan Lopez", number: "8888-8888", email: "" },
  { id: 2, name: "Ada Garay", number: "9898-9898", email: "" },
  { id: 3, name: "Martin Perez", number: "7878-7878", email: "" },
  { id: 4, name: "Julio Ruiz", number: "7676-7676", email: "" },
  { id: 5, name: "Fernanda Ulloa", number: "7474-7474", email: "" },
  { id: 6, name: "Marithza Fernandez", number: "7272-7272", email: "" },
  { id: 7, name: "Henry Dubon", number: "7171-7171", email: "" },
  { id: 8, name: "Reyna Sevilla", number: "7070-7070", email: "" },
  { id: 9, name: "Luisa Tercero", number: "7575-7575", email: "" },
  { id: 10, name: "Maria Lopez", number: "7777-7777", email: "" },
  { id: 11, name: "Mario Tercero", number: "7275-7845", email: "" },
  { id: 12, name: "Julissa Martinez", number: "8459-6523", email: "" },
  { id: 13, name: "Jairo Mendoza", number: "7152-6358", email: "" },
  { id: 14, name: "Raul Gonzales", number: "7952-8432", email: "" },
  { id: 15, name: "Estephany Gonzales", number: "8796-1258", email: "" },
  { id: 16, name: "Martha Pereira", number: "8275-3356", email: "" },
  { id: 17, name: "Carlos Avendaño", number: "7154-2288", email: "" },
  { id: 18, name: "Katerin del Socorro", number: "7445-9968", email: "" },
  { id: 19, name: "Edipcia Lopez", number: "8285-3322", email: "" },
  { id: 20, name: "Ernesto Jose", number: "8688-2545", email: "" }
];

export function AppContextProvider({ children }) {
  const [listContacts, setListContacts] = useState(list);
  const [showForm, setShowForm] = useState(false); //para mostrar el el form de agregar contacto
  const [focus, setFocus] = useState(false); //para mostrar u ocultar el boton de agregar cuando search tiene el foco
  const [idSelect, setIdSelect] = useState(-1);
  const [isNew, setIsNew] = useState(true);

  const createContact = (contact) => {
    setListContacts([contact, ...listContacts]);
  };

  const updateContact = (name='', number='', email='') => {
   // setListContacts(listContacts.filter((contact) => contact.id));

    listContacts.map(contact=>{
      if(contact.id===idSelect){
        contact.name=name;
        contact.number= number;
        contact.email=email
      }
      return contact;
  });

  };

  const deleteContact = () => {
    setListContacts(listContacts.filter((contact) => contact.id!==idSelect));
    setIdSelect(-1);
  };
  return (
    <AppContext.Provider
      value={{
        createContact: createContact,
        updateContact: updateContact,
        deleteContact: deleteContact,
        listContacts: listContacts,
        setListContacts:setListContacts,
        showForm: showForm,
        setShowForm: setShowForm,
        focus:focus,
        setFocus:setFocus,
        idSelect:idSelect,
        setIdSelect:setIdSelect,
        isNew:isNew,
        setIsNew:setIsNew
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
