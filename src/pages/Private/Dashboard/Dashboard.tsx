import DashboardContent from "../../../components/DashboardContent/DashboardContent";
import NavBarProfile from "../../../components/NavBarProfile/NavBarProfile";
import SideBar from "../../../components/SideBar/SideBar";
import "./Dasboard.scss";

function Dashboard() {
  return (
    <div>
      <NavBarProfile />
      <div id="dashboard-body">
        <SideBar />
        <DashboardContent title="Seguimiento" />
      </div>
    </div>
  );
}

export default Dashboard;
