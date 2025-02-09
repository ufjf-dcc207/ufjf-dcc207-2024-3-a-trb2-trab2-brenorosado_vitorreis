import '../css/header.css';

function Header() {


    
    return (
      <header className="header">

        <h1 className="header-title">SMART FINANCE</h1>

        <p className="header-subtitle">Controle financeiro</p>


        <div className="header-content">

        <div className="saldo-bloco">

          <h2>Saldo</h2>
          <p>R$ 218,99</p>
        </div>
        <div className="grafico-bloco">
            
          <p>Gráfico aqui</p>
        </div>
      </div>
    </header>
  );
}

export default Header;