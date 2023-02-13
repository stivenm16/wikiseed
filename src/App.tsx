import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import AuthGuard from "./guard/auth.guard";
import RoleGuard from "./guard/role.guard";
import "./index.scss";
import { Roles } from "./models/entitiesTypes/roles";
import { PrivateRoutes } from "./models/navigationTypes/loggedStackNavigatorTypes";
import { PublicRoutes } from "./models/navigationTypes/unloggedStackNavigatorTypes";
import Dashboard from "./pages/Private/Dashboard/Dashboard";

import Landing from "./pages/Public/Landing";

import store from "./redux/store";
import RoutesWithNoFound from "./utilities/RoutesWithNoFound";

const Login = lazy(() => import("./pages/Public/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNoFound>
              <Route
                path={`/`}
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard validation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route path={PublicRoutes.LANDING} element={<Landing />} />
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNoFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
