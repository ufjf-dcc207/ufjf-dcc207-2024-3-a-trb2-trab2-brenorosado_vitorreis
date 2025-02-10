import { Gauge } from "@mui/x-charts";
import "../css/Grafico.css";
import GraficoQuadrante from "./GraficoQuadrante";

function Grafico() {
  return (
    <div className="grafico-bloco">
      <GraficoQuadrante title="Dinheiro gasto:">
        <Gauge width={150} height={150} value={90} />
      </GraficoQuadrante>
      <GraficoQuadrante title="Dinheiro gasto:">
        <Gauge width={150} height={150} value={99} />
      </GraficoQuadrante>
      <GraficoQuadrante title="Dinheiro gasto:">
        <Gauge width={150} height={150} value={2} />
      </GraficoQuadrante>
      <GraficoQuadrante title="Dinheiro gasto:">
        <Gauge width={150} height={150} value={18} />
      </GraficoQuadrante>
    </div>
  );
}

export default Grafico;
