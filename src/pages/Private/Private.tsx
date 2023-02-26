import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models/navigationTypes/loggedStackNavigatorTypes";
import RoutesWithNoFound from "../../utilities/RoutesWithNoFound";
import Privacy from "./Privacy/Privacy";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

function Private() {
  return (
    <RoutesWithNoFound>
      <Route path={`/`} element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.PRIVACY} element={<Privacy />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesWithNoFound>
  );
}

export default Private;
