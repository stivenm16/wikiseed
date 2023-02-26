import NavBarProfile from "../../../components/NavBarProfile/NavBarProfile";
import SideBar from "../../../components/SideBar/SideBar";

import "./Layout.scss";

interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  return (
    <div>
      <NavBarProfile />
      <div id="dashboard-body">
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
