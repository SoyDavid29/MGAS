import { useState } from "react";
import { paragraph } from "./data/paragraph";

export default function President() {

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(prevId => (prevId === id ? null : id)); // toggle content
  };

  const selectedParagraph = paragraph.find(p => p.id === selectedId);

  return (
    <div className="presidenta-section">

      <h2>PRESIDENTA</h2>

      <div className="biografy">

        <h3>MARI ROUSS VILLEGAS BALMORI</h3>

        <p className="textos">
          (Pachuca, Hidalgo, México) es Presidenta de la Fundación MGAS, A.C.
          que apoya a niños en situación de pobreza extrema y con parálisis cerebral o alguna
          espasticidad para que sean valorados e intervenidos mediante la técnica de
          Fibrotomía Gradual Muscular para que el paciente mejore su calidad de vida y tenga mayor
          rango de movimiento.
        </p>

        <div className="buttons-section">

          {paragraph.map((item) => (
            <div key={item.id} className={`button-wrapper ${selectedId === item.id ? "active" : ""}`}>

              <button
                className="button"
                onClick={() => handleClick(item.id)}
              >
                {selectedId === item.id ? '−' : '+'} {item.title}

                <div className="textos-content">
                  {selectedId === item.id && <p>{item.description}</p>}
                </div>

              </button>

            </div>
          ))}

        </div>

      </div>

      <img className="picture" src="/images/imagen10.png" alt="imagen de nuestra representante" />


    </div>
  );
}
