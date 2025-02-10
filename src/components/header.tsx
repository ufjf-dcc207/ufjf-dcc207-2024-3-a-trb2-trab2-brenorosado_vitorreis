import "../css/Header.css";
import Saldo from "./Saldo"; 
import Grafico from "./Grafico"; 
import { HeaderProps } from "../interface/header";

function Header({saldo}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-title">SMART FINANCE</h1>
        <p className="header-subtitle">Controle financeiro</p>
      </div>
      <div className="header-content">
        <Saldo saldo={saldo}/> {/* Componente Saldo */}
        <Grafico /> {/* Componente Grafico */}
      </div>
    </header>
  );
}

export default Header;
