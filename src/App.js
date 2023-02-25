import "./App.css";
import { NavBar } from "./components/NavBar";
import { ListContacts } from "./components/ListContacts";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { NewContact } from "./components/NewContact";

function App() {
  const { showForm } = useContext(AppContext);

  return (
    <div className="App">
      <div className="app-navbar">
        <NavBar />
      </div>
      <div className="app-contenedor">
        <ListContacts />
        {showForm && <NewContact />}
      </div>
      {/* <div className="app-footer">
        <p>Todos los derechos reservados ... Moises FLorez</p>
      </div>  */}
    </div>
  );
}

export default App;
