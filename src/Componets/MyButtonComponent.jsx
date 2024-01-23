import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import getBooks from "./data.js";

function MyButtonComponent(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [buttonText, setButtonText] = useState(props.btnTxt);
  //const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  //DESPALILLAR: dejar solo lo minimo indispensable para que funcione el componente que se supone que es un boton,
  // que cuando se presiona toggles un componente que se le pasa por props. De este modo cada instancia de este MyButtonComponent
  // mostrara y ocultara un tercer componente distinto.

  function toggleInput() {
    const comp = document.getElementById(props.ref_id_otro_Componente);
    if (comp.style.display === "inline-block") {
      comp.style.display = "none";
    } else {
      comp.style.display = "inline-block";
    }
  }

  return (
    <div>
      <button onClick={toggleInput} id={props.id}>
        {buttonText}
      </button>
    </div>
  );
}

export default MyButtonComponent;
