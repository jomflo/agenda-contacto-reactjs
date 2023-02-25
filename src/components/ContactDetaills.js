import React from "react";
import "../styles/ContactDetaills.css";
import { VscAccount, VscClose } from "react-icons/vsc";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Boton } from "./Boton";

export function ContactDetaills({ handleShowContact }) {
  const { listContacts, idSelect, setIsNew, setShowForm, deleteContact } =
    useContext(AppContext);

  const contact = listContacts.find((contacto) => contacto.id === idSelect);

  const handleClose = () => {
    handleShowContact(false);
  };

  const handleUpdate = () => {
    setIsNew(false);
    setShowForm(true);
  };
  const handleDelete = () => {
    deleteContact();
  };

  return (
    <div className="show-contact">
      <div className="contact-detaill">
        <div className="contact-close">
          <VscClose className="icon-close" onClick={handleClose} />
        </div>
        <div className="contact-user">
          <VscAccount className="icon-user" />
        </div>
        <h1>{contact.name}</h1>
        <div>{contact.number}</div>
        {contact.email && <div>{contact.email}</div>}
      </div>
      <div className="contact-button">
        <div onClick={handleUpdate}>
          <Boton text="Editar" />
        </div>
        <div onClick={handleDelete}>
          <Boton text="Eliminar" />
        </div>
        <div onClick={handleClose}>
          <Boton text="Regresar" />
        </div>
      </div>
    </div>
  );
}
