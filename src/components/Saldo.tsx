import "../css/Saldo.css";

interface SaldoProps{
  saldo: number
}

function Saldo({saldo}: SaldoProps) {

/* passa o saldo como prop aqui e no menuFlutuante pra atualizar, cara to com preguiça vai fe ai Deus te ensaboe */

  return (
    <div className="saldo-container">
      <div className="saldo-bloco">
        <h2>Saldo</h2>
        <p>R${saldo.toLocaleString()}</p>
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
