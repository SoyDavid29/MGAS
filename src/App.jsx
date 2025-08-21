import { useState } from "react";

import Sidebar from "./Sidebar"
import Hero from "./Hero"
import Menu from "./Menu"
import Section from "./Section";
import President from "./President";
import Newsection from "./Newsection";
import Form from "./Form";



function App() {

  const [menuOpen, setMenuOpen] = useState(false); // shared state with toggle menu

  return (
    <>
    <Sidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    <Menu menuOpen={menuOpen} />
    <Hero />

    <div className="info">
      <div className="malala">
        <img className="malala-photo" src="/images/imagen1.png" alt="malala poster" />
      </div>

      <div className="info-fundacion">
        <h2>Apoyando a más de 1,234
          familias, por: Más de 2700
          pacientes beneficiados.
        </h2>
        <h1>FUNDACION MGAS.AC</h1>

        <img className="logo-asociasion" src="/images/imagen6.png" alt="logo asociacion" />
      </div>
    </div>

    <Section/>

    <President/>

    <Newsection form={<Form/>}/>
    

    
  </>
  );
}

export default App
