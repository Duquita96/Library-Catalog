import Search from "../Componets/Search";
import MyButtonComponent from "../Componets/MyButtonComponent";
import searchButton from "../Componets/Search";
import Books from "./Books";

function Header() {
  return (
    <div>
      <Search pText="papo"/>
      <MyButtonComponent id="1" textoDelBoton="TextoDeMiBoton1" componenteConQuienInteractua="referenciaAlComponente" refAOtroBoton="refBt2"/>
      <MyButtonComponent id="2" btnTxt="Bt2" compid="b2"/>
      <MyButtonComponent id="3" btnTxt="Bt3" compid="b3"/>

      <Books id="b2" masTxt=" LotR"/> 
      <Books id="b3"masTxt=" acotar"/> 
      {/* <button>Adding</button>
      <button>About US</button> */}
    </div>
  );
}

export default Header;
