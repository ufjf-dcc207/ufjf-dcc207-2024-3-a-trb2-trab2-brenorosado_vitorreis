import "../css/Saldo.css";

function Saldo() {

  return (
    <div className="saldo-container">
      <div className="saldo-bloco">
        <h2>Saldo</h2>
        <p>R$ 218,99</p>
      </div>
      <div className="extrato-blocos">
        <div className="extrato-item"></div>
        <div className="extrato-item"></div>
        <div className="extrato-item"></div>

      </div>
    </div>
  );
}

export default Saldo;
