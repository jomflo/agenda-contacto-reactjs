import React from "react";
import "../styles/NavBar.css";
import { VscMenu, VscClose } from "react-icons/vsc";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { BiUserMinus} from "react-icons/bi";
import { BiUserPlus} from "react-icons/bi";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useState } from "react";

export function NavBar() {
  const {
    listContacts,
    setListContacts,
    focus,
    setFocus,
    showForm,
    setShowForm,
    setIsNew
  } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [listBack, setListBack] = useState(listContacts);

  const searchContact=(name)=>{
    setListContacts(listBack);
    setListContacts(
      listBack.filter(
        (contact) =>
          contact.name.toLowerCase().includes(name) ||
          contact.number.includes(name)
      )
    );

  }
  const handleSearch = (e) => {
    const name = e.target.value.toLowerCase().trim();
    searchContact(name);
    setSearch(e.target.value);
  };

  const handleOnFocus = (focused) => {
    if(listBack.length<listContacts.length) {
      setListBack(listContacts);
      setListContacts(listBack);
    }
    if(focused){
      searchContact(search);
      // setListContacts(listBack);
    }else{
      setListContacts(listBack);
      setSearch("");
    }
    setFocus(focused); //cambiar el valor de focus para cerrar o mostrar el boton de ADD contacto
  };

  const handleBlur=()=>{
    // setListContacts(listBack);
  }

  const handleClickADD = () => {
    setIsNew(true);
    setShowForm(!showForm);
  };

  return (
    <div className="navbar">
      <VscMenu className="icon icon-menu" />
      <input
        className="search"
        type="search"
        placeholder="Buscar Contacto"
        maxLength={40}
        onBlur={handleBlur}
        onFocus={() => handleOnFocus(true)}
        value={search}
        onChange={handleSearch}
      />
      {
        //si tiene el foco en el search entonces muestrame el icono de cerrar, y si no tiene el foco
        //entonces muestrame el icono de agregar nuevo contacto
        focus ? (
          <VscClose
          className="icon icon-close-search"
          onClick={() => handleOnFocus(false)}
        />
        ) : (
          <BiUserPlus
          className="icon icon-add-contact"
          onClick={() => handleClickADD()}
        />
            
       
        )
      }
    </div>
  );
}
