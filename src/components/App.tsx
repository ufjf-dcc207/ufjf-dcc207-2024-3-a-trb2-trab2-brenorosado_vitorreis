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

  function addRecipe(value: number, type: string){
    if(value === 0)
      throw new Error("Não é possivel adicionar receita de valor 0");
    const newRecipe = {
      id: Date.now(), 
      value: type === "receita" ? value : value * -1
    };

    setRecipes([...recipes, newRecipe])
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
      />
        <Header />
    </div>
  );
}

export default App;



