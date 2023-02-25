import React from "react";
import "../styles/NewContact.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { VscClose } from "react-icons/vsc";

export function NewContact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loadData, setLoadData] = useState(true);

  const {
    createContact,
    updateContact,
    listContacts,
    setShowForm,
    idSelect,
    isNew,
  } = useContext(AppContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: listContacts.length + 1,
      name: name.trim(),
      number: number,
      email: email,
    };
    isNew ? createContact(contact) : updateContact(name, number, email);

    setName("");
    setNumber("");
    setEmail("");
    setShowForm(false);
  };

  //cargar los datos en el formulario solo si es que se va editar un contacto, esto cuando se ingrese
  //por primera vez el mouse dentro del componente
  const handleMouseEnter = () => {
    !isNew && !loadData && setLoadData(false) ;
    loadData && loadDataForm();
  };

  //si el mouse sale del formulario entonces actualizamo loadData en false para que cuendo vuelva entrar
  //no cargue de nuevo los datos
  const handleMouseLeave=()=>{
    setLoadData(false);
  }
  const loadDataForm = () => {
    if (!isNew) {
      const contact = listContacts.find((contact) => contact.id === idSelect);
      setName(contact.name);
      setNumber(contact.number);
      setEmail(contact.email);
    }
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div
      className="new-contact"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-close">
          <VscClose className="form-close-icon" onClick={handleClose} />
        </div>
        <div className="form-name">
          <label htmlFor="name">Nombre:</label>
          <input
            className="name"
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={name}
            minLength={3}
            maxLength={30}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-number">
          <label htmlFor="number">Telefono:</label>
          <input
            className="number"
            type="tel"
            name="number"
            placeholder="Numero de Telefono"
            value={number}
            minLength={8}
            maxLength={20}
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>

        <div className="form-email">
          <label htmlFor="email">Correo:</label>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Correo Electronico"
            value={email}
            maxLength={50}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-button">
          <input
            className="btn-cancel"
            type="button"
            value="Cancelar"
            onClick={handleClose}
          />
          <button className="btn-save">Guardar</button>
        </div>
      </form>
    </div>
  );
}
