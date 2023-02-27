import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../models/navigationTypes/loggedStackNavigatorTypes";
import { PublicRoutes } from "../models/navigationTypes/unloggedStackNavigatorTypes";
import { AppStore } from "../redux/store";

interface Props {
  validation: boolean;
}
const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ validation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.name ? (
    validation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate to={`wiseed/${PublicRoutes.LOGIN}`} />
  );
};

export default AuthGuard;
