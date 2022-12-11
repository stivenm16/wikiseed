//CORE COMPONENTS
import React, { useReducer, createContext, useEffect } from "react";
import AuthReducer from "../../reducers/AuthReducer";

//TYPES
import {
  AuthStateT,
  IAuthContext,
} from "../../../types/contextTypes/AuthContextTypes";
import { UserT } from "../../../types/entitiesTypes/user";

//SERVICES
// import AsyncStorage from "@react-native-async-storage/async-storage";

//EXTERNAL COMPONENTS
// import { validateToken } from "../../../services/token.service";

const initialAuthState: AuthStateT = {
  isAuthenticated: true,
  user: null,
  isLoading: false,
  accessToken: null,
};

export const AuthContext = createContext<IAuthContext>({
  authState: initialAuthState,
  dispatchAuthState: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, dispatchAuthState] = useReducer(
    AuthReducer,
    initialAuthState
  );

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // const checkUser = async () => {
  //   // const user = await AsyncStorage.getItem("user");
  //   // const userParse: UserT = JSON.parse(user!!);

  //   //No token, no autenticado
  //   // if (!userParse) return;

  //   //Hay token
  //   // const response = await validateToken(userParse.accessToken);

  //   if (
  //     response.data.statusCode === 401 ||
  //     response.data.message === "invalid signature" ||
  //     response.data.message === "jwt expired"
  //   ) {
  //     // NavigationService.navigate(UnloggedRoutes.FORGOT_PASSWORD);
  //     // await AsyncStorage.removeItem("user");
  //     // return ToastAndroid.show('Vuelve a iniciar sesión', ToastAndroid.SHORT);
  //   }

  //   dispatchAuthState({
  //     type: "SET_USER",
  //     payload: {
  //       isAuthenticated: true,
  //       // user: userParse,
  //     },
  //   });
  // };

  return (
    <AuthContext.Provider value={{ authState, dispatchAuthState } as any}>
      {children}
    </AuthContext.Provider>
  );
};

export {};
