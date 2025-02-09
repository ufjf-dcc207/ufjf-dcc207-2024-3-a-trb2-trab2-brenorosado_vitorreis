import "../css/MenuFlutuante.css";

interface MenuFlutuanteProps {
  isVisible: boolean;
  type: "receita" | "despesa" | null;
  onClose: () => void;
}

/*

Coloquei so o valor da despesa, ai vai adicionar um bloco de extrato e subtrair do saldo

se vc qser brincar da pra colocar o nome da despesa e a data, mas ai ja é com vc

 */


function MenuFlutuante({ isVisible, type, onClose }: MenuFlutuanteProps) {
  if (!isVisible) return null;

  return (
    <div className="menu-flutuante">
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{type === "receita" ? "Adicionar Receita" : "Adicionar Despesa"}</h2>
        {



        }
        <form>
          <input type="number" placeholder="Valor" className="input-valor" />
          <button type="submit" className="submit-button">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default MenuFlutuante;
