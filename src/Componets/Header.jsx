import FilterBooksList from "./FilterBooksList";
import MyButtonComponent from "../Componets/MyButtonComponent";
import Books from "./Books";
import React, { useState } from "react";

function Header() {
  //const [showSearch, setShowSearch] = useState(false);
 // const [showBooks, setShowBooks] = useState(false);
  return (
    <div>
      <div id="buttonsHeader">
      {/* boton de tabla de libros */}
      <MyButtonComponent  btnTxt="Books Table" ref_id_otro_Componente="filterBooksId" />
      {/* Search esta en el div de abajo para que no se muestre con el mismo style de los botones */}


      {/* <MyButtonComponent id="1" textoDelBoton="TextoDeMiBoton1" componenteConQuienInteractua="referenciaAlComponente" refAOtroBoton="refBt2"/> */}
      <MyButtonComponent id="buttonSearch" btnTxt="Bt2" ref_id_otro_Componente="b2" />

    </div>
    <div>

        <FilterBooksList id="filterBooksId" class ="buttons" />
        <Books id="b2" masTxt="placeHolder" class ="buttons"/>
      </div>
    </div>
    
  );
}

export default Header;
