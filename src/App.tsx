import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import AuthGuard from "./guard/auth.guard";
import "./index.scss";
import { PrivateRoutes } from "./models/navigationTypes/loggedStackNavigatorTypes";
import { PublicRoutes } from "./models/navigationTypes/unloggedStackNavigatorTypes";

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
            <RoutesWithNoFound>
              <Route
                path={`/`}
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route path={PublicRoutes.LANDING} element={<Landing />} />
            </RoutesWithNoFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
