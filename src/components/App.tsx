import { useState } from "react";
import "../css/App.css";
import Header from "./header";
import Sidebar from "./Sidebar";
import MenuFlutuante from "./MenuFlutuante";

type RecipeType = {
  id: number,
  value: number,
}

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuType, setMenuType] = useState<"receita" | "despesa" | null>(null);
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [saldo, setSaldo] = useState(0);

  const handleAddClick = () => {
    setMenuType("receita"); // Define que o menu é para receita.
    setMenuVisible(true); // Exibe o menu flutuante.
  };

  const handleRemoveClick = () => {
    setMenuType("despesa"); // Define que o menu é para despesa.
    setMenuVisible(true); // Exibe o menu flutuante.
  };

  const handleCloseMenu = () => {
    setMenuVisible(false); // Fecha o menu flutuante.
    setMenuType(null);
  };

  function addRecipe(value: number, type: string | null){
    if(value === 0) return;
    value = type === "receita" ? value : value * -1
    const newRecipe = {
      id: Date.now(), 
      value: value
    };

    setSaldo(saldo => saldo + value)
    setRecipes([...recipes, newRecipe])
    console.log([...recipes, newRecipe])
  }

  function removeRecipe(id: number){
    setRecipes([...recipes.filter(recipe => recipe.id !== id)])
  }

  return (
    <div className="App">
      
      <Sidebar onAddClick={handleAddClick} onRemoveClick={handleRemoveClick} />
      <MenuFlutuante
        isVisible={menuVisible}
        type={menuType}
        onClose={handleCloseMenu}
        addRecipe={addRecipe}
      />
        <Header />
    </div>
  );
}

export default App;



