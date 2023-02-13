//CORE COMPONENTS
import React from "react";

//MODELS
import { UserReducerActionT } from "../../models/contextModels/AuthContext.model";
import { UserT } from "../../models/entitiesTypes/user";
import types from "../../utilities/constants/ActionStoreTypes";

export const setUser = (
  user: UserT | null,
  dispatch: React.Dispatch<UserReducerActionT>
) => {
  dispatch({
    type: types.SET_USER,
    payload: {
      isAuthenticated: true,
      user,
    },
  });
};

export const setLogout = (
  user: UserT | null,
  dispatch: React.Dispatch<UserReducerActionT>
) => {
  dispatch({
    type: types.SET_LOGOUT,
    payload: {
      isAuthenticated: false,
      user,
    },
  });
};

export const setUserAccessToken = (
  accessToken: string,
  dispatch: React.Dispatch<UserReducerActionT>
) => {
  dispatch({
    type: types.SET_ACCESS_TOKEN,
    payload: {
      accessToken,
    },
  });
};

export const setAuthLoading = (
  isLoading: boolean,
  dispatch: React.Dispatch<UserReducerActionT>
) => {
  dispatch({
    type: types.SET_LOADING,
    payload: {
      isLoading,
    },
  });
};
