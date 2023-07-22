import "./Chart.css";
import ChartBar from "./ChartBar/CharBar";

export default function Chart(props: any) {

  let maxVal = 0;

  for(let i of props.dataPoints) {
    if(i.value > maxVal) {
      maxVal = i.value
    }
  }
  return (
    <div className="chart">
      {props.dataPoints.map((d: any) => (
        <ChartBar
          key={d.label}
          value={d.value}
          maxValue={maxVal}
          label={d.label}
        />
      ))}
    </div>
  );
}
