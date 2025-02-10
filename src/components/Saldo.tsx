import "../css/Saldo.css";
import { HeaderProps } from "../interface/header";
import ExtratoBloco from "./ExtratoBlocos";

function Saldo({balance, recipes}: HeaderProps) {

/* passa o saldo como prop aqui e no menuFlutuante pra atualizar, cara to com preguiça vai fe ai Deus te ensaboe */

  return (
    <div className="saldo-container">
      <div className="saldo-bloco">
        <h2>Saldo</h2>
        <p>R${balance.toLocaleString()}</p>
      </div>
      <div className="extrato-blocos">
        {recipes.map(recipe => (
          <ExtratoBloco key={recipe.id} recipe={recipe}/>
        ))}
      </div>
    </div>
  );
}

export default Saldo;
