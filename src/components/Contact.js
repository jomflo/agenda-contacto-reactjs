import React from "react";
import "../styles/Contact.css";
import { BiUserCircle } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MenuDelete } from "./MenuDelete";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { ContactDetaills } from "./ContactDetaills";

export function Contact({ id, name }) {
  const { setIdSelect } = useContext(AppContext);
  const [showMenuDelete, setShowMenuDelete] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleClickThreePoint = () => {
    setIdSelect(id);
    setShowMenuDelete(!showMenuDelete);
  };
  const cerrarMenuDelete = () => {
    setShowMenuDelete(false);
  };

  const handleShowContact=(show)=>{
    setIdSelect(id);
setShowContact(show);
  }
  return (
    <>
      {showMenuDelete && (
        <MenuDelete cerrarMenuDelete={cerrarMenuDelete} name={name} />
      )
      }
      {
        showContact && (<ContactDetaills handleShowContact={handleShowContact}/>)
      }
      <div className="contact">
        <div className="contact-principal" onClick={()=>{handleShowContact(true)}}>
          <div className="contact-img">
            <BiUserCircle className="icon" />
          </div>
          <div className="name">{name}</div>
        </div>
        <div className="three-point">
          <BsThreeDotsVertical
            className="icon icon-three-point"
            onClick={handleClickThreePoint}
          />
        </div>
      </div>
    </>
  );
}
