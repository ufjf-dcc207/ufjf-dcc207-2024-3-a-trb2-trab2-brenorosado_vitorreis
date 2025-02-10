import { useState } from "react";
import "../css/App.css";
import Header from "./header";
import Sidebar from "./Sidebar";
import MenuFlutuante from "./MenuFlutuante";
import { RecipeType } from "../interface/recipe";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuType, setMenuType] = useState<"receita" | "despesa" | null>(null);
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [balance, setBalance] = useState(0);

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

  function addRecipe(value: number, type: string | null, title: string){
    if(value === 0) return;
    value = type === "receita" ? value : value * -1
    const newRecipe = {
      id: Date.now(),
      type: type || "", 
      title: title,
      value: value
    };

    setBalance(balance => balance + value)
    setRecipes([...recipes, newRecipe])
    console.log([...recipes, newRecipe])
  }

  function removeRecipe(id: number){
    setBalance(balance => balance - recipes.filter(recipe => recipe.id === id)[0].value)
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
        <Header 
        balance={balance}
        recipes={recipes}
        removeRecipe={removeRecipe}
        />
    </div>
  );
}

export default App;



