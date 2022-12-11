import types from '../../constants/ActionStoreTypes';

function AuthReducer(state: any, { payload, type }: any) {
  switch (type) {
    case types.SET_USER:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
      };
    case types.SET_LOGOUT:
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user,
      };
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    default:
      return state;
  }
}

export default AuthReducer;
