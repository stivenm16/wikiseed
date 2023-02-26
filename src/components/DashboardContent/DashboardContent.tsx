import "./DashboardContent.scss";
interface Props {
  title: string;
}
function DashboardContent({ title }: Props) {
  return (
    <div id="Dashboard-content">
      <h3>{title}</h3>
      <div id="graphs">
        <div className="graph">
          <label htmlFor="">Ciclo de crecimiento</label>
          <div></div>
        </div>
        <div className="graph">
          <label htmlFor="">Produccion estimada / volumen tierra</label>
          <div></div>
        </div>
        <div className="graph">
          <label htmlFor="">Espectro de luz</label>
          <div></div>
        </div>
        <div className="graph">
          <label htmlFor="">Deficiencias nutricionales / fase</label>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
