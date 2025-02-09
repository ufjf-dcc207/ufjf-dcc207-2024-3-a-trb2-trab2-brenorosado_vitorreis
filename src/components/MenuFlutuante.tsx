import { useState } from "react";
import "../css/MenuFlutuante.css";

interface MenuFlutuanteProps {
  isVisible: boolean;
  type: "receita" | "despesa" | null;
  onClose: () => void;
  addRecipe: (value: number, type: string|null) => void
}

function MenuFlutuante({ isVisible, type, onClose, addRecipe }: MenuFlutuanteProps) {
  const [value, setValue] = useState(0);
  if (!isVisible) return null;


  function handleAddRecipe(){
    addRecipe(value ? value : 0, type);
    setValue(0)
    onClose()
  }

  return (
    <div className="menu-flutuante">
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{"Adicionar " + type}</h2>
          <input type="number" placeholder="Valor" value={value} onChange={(e) => setValue(Number(e.target.value))} className="input-valor" />
          <button type="submit" className="submit-button" onClick={handleAddRecipe}>Salvar</button>
      </div>
    </div>
  );
}

export default MenuFlutuante;
