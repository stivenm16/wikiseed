import { Dispatch } from 'react';
import { UserT } from '../entitiesTypes/user';

export type AuthStateT = {
  isAuthenticated: boolean;
  user: UserT | null;
  isLoading: boolean;
  accessToken: string | null;
};

export type UserReducerActionT = {
  type: string;
  payload: any;
};

export interface IAuthContext {
  authState: AuthStateT;
  dispatchAuthState: Dispatch<UserReducerActionT>;
}
