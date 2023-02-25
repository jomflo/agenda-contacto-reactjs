import React from "react";
import '../styles/Boton.css'

export function Boton({ text }) {
  return <div className={`boton boton-${text.toLowerCase()}`}>{text}</div>;
}
