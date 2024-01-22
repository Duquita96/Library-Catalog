import Search from "../Componets/Search";
import searchButton from "../Componets/Search";
import Books from "./Books";

function Header() {
  return (
    <div>
      <Search/>
      <Books/> 
      {/* <button>Adding</button>
      <button>About US</button> */}
    </div>
  );
}

export default Header;
