import React, { useContext } from "react";
import "../styles/MenuDelete.css";
import { AppContext } from "../context/AppContext";
import { NewContact } from "../components/NewContact";
import { VscClose } from "react-icons/vsc";
import { Boton } from "./Boton";


export function MenuDelete({ cerrarMenuDelete, name }) {
  const { deleteContact, showForm, setShowForm, setIsNew } =
    useContext(AppContext);

  const handleDelete = () => {
    deleteContact();
    cerrarMenuDelete();
  };
  const handleUpdate = () => {
    setIsNew(false);
    cerrarMenuDelete();
    setShowForm(true);
  };
  const handleCancel = () => {
    cerrarMenuDelete();
  };
  return (
    <>
      {showForm && <NewContact />}
      <div className="menu-contact">
        <div className="menu-contact-contenedor">
          <div className="menu-icon-close">
            <VscClose className="icon-close" onClick={handleCancel} />
          </div>
          <div className="menu-button">
            <h1 className="name-contact">{name}</h1>
            <div className="menu">
              <div className="btn btn-delete" onClick={handleDelete}>
                <Boton text="Eliminar"/>
              </div>
              <div className="btn btn-update" onClick={handleUpdate}>
              <Boton text="Editar"/>
              </div>
              <div className="btn btn-cancel" onClick={handleCancel}>
              <Boton text="Cancelar"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
