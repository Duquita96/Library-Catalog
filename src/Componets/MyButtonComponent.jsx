import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import getBooks from "./data.js";

function MyButtonComponent(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [buttonText, setButtonText] = useState("MBC");
  //const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);


  //DESPALILLAR: dejar solo lo minimo indispensable para que funcione el componente que se supone que es un boton, 
  // que cuando se presiona toggles un componente que se le pasa por props. De este modo cada instancia de este MyButtonComponent
  // mostrara y ocultara un tercer componente distinto.

  function toggleInput() {
    const comp = document.getElementById(props.compid);
    if (comp.style.display === "inline-block") {
      comp.style.display = "none";
      setButtonText("MBC"+props.btnTxt);

    } else {
      setButtonText("Hide"+props.btnTxt);
      comp.style.display = "inline-block";
    }
  }

  // function toggle3ComponentVisibility(thirdcomponent, display) {
  //   //const comp = document.getElementsByName(componentName);
  //   thirdcomponent.style.display = display;
  // }

  return (
    <div>
      <button onClick={toggleInput} id={`mbc_id_${props.id}`}>
        {buttonText + props.btnTxt } 
      </button>

    </div>
  );
}

export default MyButtonComponent;

