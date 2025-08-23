import { useState } from "react";
import { Element } from 'react-scroll';

import Sidebar from "./Sidebar"
import Hero from "./Hero"
import Menu from "./Menu"
import Section from "./Section";
import President from "./President";
import Newsection from "./Newsection";
import Form from "./Form";


function Home() {

  const [menuOpen, setMenuOpen] = useState(false); // shared state with toggle menu


  return (
    <>

      <Element name="start">
        <Sidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <Menu menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <Hero />
      </Element>



      <div className="info">

        <div className="malala">
          <img className="malala-photo" src="/images/imagen1.png" alt="malala poster" />
        </div>

        <Element name="about">

          <div className="info-fundacion">
            <h2>Apoyando a más de 1,234
              familias, por: Más de 2700
              pacientes beneficiados.
            </h2>
            <h1>FUNDACION MGAS.AC</h1>

            <img className="logo-asociasion" src="/images/imagen6.png" alt="logo asociacion" />
          </div>

        </Element>

      </div>

      <Element name="galery">
        <Section />
      </Element>


      <Element name="president">

        <President />

      </Element>

      <Newsection form={<Form />} />



    </>
  );
}

export default Home
