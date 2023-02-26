import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Roles } from "../models/entitiesTypes/roles";
import { PrivateRoutes } from "../models/navigationTypes/loggedStackNavigatorTypes";
import { AppStore } from "../redux/store";

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
}

export default RoleGuard;
