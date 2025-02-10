import { BarChart, Gauge, gaugeClasses, PieChart } from "@mui/x-charts";
import "../css/Grafico.css";
import GraficoQuadrante from "./GraficoQuadrante";
import { RecipeType } from "../interface/recipe";

interface GraficoProps{
  recipes: RecipeType[]
}

type PieChartType ={
  id: number,
  value: number,
  label: string
}

function Grafico({recipes}: GraficoProps) {
  let cashWaste = 0, cashGain = 0;
  const dataGain: { [label: string]: PieChartType } = {};
  const dataWaste: { [label: string]: PieChartType } = {};

  recipes.forEach(recipe => {
    if (recipe.type === "receita") {
      cashGain += recipe.value;
      if (dataGain[recipe.title]) {
        dataGain[recipe.title].value += recipe.value;
      } else {
        dataGain[recipe.title] = { id: recipe.id, value: recipe.value, label: recipe.title };
      }
    } else {
      cashWaste -= recipe.value;
      if (dataWaste[recipe.title]) {
        dataWaste[recipe.title].value += recipe.value * -1;
      } else {
        dataWaste[recipe.title] = { id: recipe.id, value: recipe.value * -1, label: recipe.title };
      }
    }
  });

  const dataGainArray = Object.values(dataGain);
  const dataWasteArray = Object.values(dataWaste);
  console.log(dataWasteArray.length)
  return (
    <div className="grafico-bloco">
      <GraficoQuadrante title="Dinheiro gasto:">
        <Gauge width={150} height={150} value={cashWaste} valueMax={cashGain}
        sx={() => ({
          [`& .${gaugeClasses.valueArc}`]: {
            fill: cashWaste < cashGain ? '#52b202' : '#a62c2a',
          },
        })}
        />
      </GraficoQuadrante>
      <GraficoQuadrante title="Receitas X Despesas:">
        <BarChart
          xAxis={[{scaleType: 'band', data:['receitas', 'despesas']}]}
          series={[{data: [cashGain, cashWaste]}]}
        />
      </GraficoQuadrante>
      <GraficoQuadrante title="Ganhos:">
        <PieChart
        series={[{
          data: dataGainArray.length !== 0 ? dataGainArray : [{id:0, value:0, label: ""}] ,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -100,
          endAngle: 225,
        }]}
        />
      </GraficoQuadrante>
      <GraficoQuadrante title="Gastos:">
        <PieChart
          series={[{
            data: dataWasteArray.length !== 0 ? dataWasteArray : [{id: 0, value: 0, label: ""}] ,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -100,
            endAngle: 225,
          }]}
        />
      </GraficoQuadrante>
    </div>
  );
}

export default Grafico;
