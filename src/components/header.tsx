import "../css/Header.css";
import Saldo from "./Saldo"; 
import Grafico from "./Grafico"; 
import { HeaderProps } from "../interface/header";

function Header({balance, recipes, removeRecipe}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">SMART FINANCE</h1>
        <p className="header-subtitle">Controle financeiro</p>
      </div>
      <div className="header-content">
        <Saldo
        balance={balance}
        recipes={recipes}
        removeRecipe={removeRecipe}
        />
        <Grafico recipes={recipes}/>
      </div>
    </header>
  );
}

export default Header;
