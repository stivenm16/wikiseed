import { NavigateFunction } from "react-router-dom";
import { PrivateRoutes } from "./../models/navigationTypes/loggedStackNavigatorTypes";
export const rootUrl = "/wikiseed";

export const customNavigate = (
  route: PrivateRoutes,
  navigate: NavigateFunction,
  replace: boolean = true
): void => {
  navigate(privateRoutePath(route), { replace });
};
const privateRoutePath = (route: PrivateRoutes): string => {
  return `/wiseed/private/${route}`;
};

export default rootUrl;
