import "../css/Saldo.css";
import { HeaderProps } from "../interface/header";
import ExtratoBloco from "./ExtratoBlocos";

function Saldo({balance, recipes, removeRecipe}: HeaderProps) {
  return (
    <div className="saldo-container">
      <div className="saldo-bloco">
        <h2>Saldo</h2>
        <p>R${balance.toLocaleString()}</p>
      </div>
      <div className="extrato-blocos">
        {recipes.map(recipe => (
          <ExtratoBloco key={recipe.id} recipe={recipe} removeRecipe={removeRecipe}/>
        ))}
      </div>
    </div>
  );
}

export default Saldo;
