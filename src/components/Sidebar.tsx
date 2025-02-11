import "../css/Sidebar.css";

interface SidebarProps {
    onAddClick: () => void;
    onRemoveClick: () => void;
  }
  
  function Sidebar({ onAddClick, onRemoveClick }: SidebarProps) {
    return (
      <div className="sidebar">
        <img src="/image.png" className="sidebar-avatar"></img>
        <button className="sidebar-button" onClick={onAddClick}>
          <div className="button-circle">+</div>
          <p>Receita</p>
        </button>
        <button className="sidebar-button" onClick={onRemoveClick}>
          <div className="button-circle">-</div>
          <p>Despesa</p>
        </button>
      </div>
    );
  }
  
  export default Sidebar;
