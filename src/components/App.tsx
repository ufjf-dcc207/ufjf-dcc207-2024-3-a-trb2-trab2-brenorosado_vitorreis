import { useState } from "react";
import "../css/App.css";
import Header from "./header";
import Sidebar from "./Sidebar";
import MenuFlutuante from "./MenuFlutuante";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuType, setMenuType] = useState<"receita" | "despesa" | null>(null);

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



