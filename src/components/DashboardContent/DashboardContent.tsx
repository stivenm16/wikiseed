import "./DashboardContent.scss";
interface Props {
  title: string;
}
function DashboardContent({ title }: Props) {
  return (
    <div id="Dashboard-content">
      <h3>{title}</h3>
    </div>
  );
}

export default DashboardContent;
