import React from "react";
import "../styles/ListContacts.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Contact } from "./Contact";

export function ListContacts() {
  const { listContacts } = useContext(AppContext);

  return (
    <div className="list-contact">
      <div className="list-contact-content">
        {listContacts.length > 0 ? (
          listContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              email={contact.email}
            />
          ))
        ) : (
          <h1>Sin Resultados</h1>
        )}
      </div>
    </div>
  );
}
