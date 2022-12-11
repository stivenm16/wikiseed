import React from 'react';
import axios, { AxiosResponse } from 'axios';
import apiRoutes from '../constants/apiRoutes';
import { CreateAccountUserT, LoginUserT, MessageError, UserT } from '../types/entitiesTypes/user';
import { setAuthLoading, setUser, setUserAccessToken } from '../contexts/actions/auth.actions';
import { UserReducerActionT } from '../types/contextTypes/AuthContextTypes';
import { Alert } from 'react-native';
import NavigationService from './navigation.service';
import { UnloggedRoutes } from '../navigation/routes/unloggedRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationService from './navigation.service';

export const createUserAccount = async (
  user: CreateAccountUserT,
  dispatchAuthState: React.Dispatch<UserReducerActionT>
): Promise<any> => {
  try {
    const response = await axios.post<CreateAccountUserT, AxiosResponse<UserT, any>>(
      apiRoutes.createAccount,
      user
    );
    setAuthLoading(false, dispatchAuthState);
    if (response.status === 201) {
      const data = response.data;
      setUser(data, dispatchAuthState);
      return data;
    }

    return response.data;
  } catch (error) {
    console.log(error);
    setAuthLoading(false, dispatchAuthState);
  }
};

export const loginUser = async (
  user: LoginUserT,
  dispatchAuthState: React.Dispatch<UserReducerActionT>
): Promise<any> => {
  try {
    setAuthLoading(true, dispatchAuthState);
    const response = await axios.post<LoginUserT, AxiosResponse<UserT, any>>(apiRoutes.login, user);
    setAuthLoading(false, dispatchAuthState);

    if (response.status === 201) {
      if (
        response.data.statusCode === 400 ||
        response.data.statusCode === 401 ||
        response.data.statusCode === 404
      ) {
        // setAuthLoading(false, dispatchAuthState);
        return response.data.statusCode;
      } else {
        const data = response.data;
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setUser(data, dispatchAuthState);
        return data;
      }
    }

    return response.data;
  } catch (error) {
    console.log('error', error);
    setAuthLoading(false, dispatchAuthState);
  }
};

export const requestNewPassword = async (
  userEmail: string,
  dispatchAuthState: React.Dispatch<UserReducerActionT>
): Promise<any> => {
  try {
    setAuthLoading(true, dispatchAuthState);
    const response = await axios.post<string, AxiosResponse<void, any>>(apiRoutes.requestPassword, {
      userEmail: userEmail,
    });
    setAuthLoading(false, dispatchAuthState);

    if (response.status === 201) {
      NavigationService.navigate(UnloggedRoutes.CODE_VERIFICATION, { userEmail });
      return response.data;
    }

    return response.data;
  } catch (error) {
    console.log('error', error);
    setAuthLoading(false, dispatchAuthState);
  }
};

export const validateCode = async (
  userEmail: string,
  code: number,
  dispatchAuthState: React.Dispatch<UserReducerActionT>
): Promise<any> => {
  try {
    setAuthLoading(true, dispatchAuthState);
    const response = await axios.post<string, AxiosResponse<any, any>>(apiRoutes.validateCode, {
      userEmail,
      code,
    });
    setAuthLoading(false, dispatchAuthState);

    console.log('🚀 ~ file: user.service.ts ~ line 107 ~ response.status', response.status);
    console.log('🚀 ~ file: user.service.ts ~ line 107 ~ response.data', response.data);

    if (response.status === 201) {
      setUserAccessToken(response.data.accessToken, dispatchAuthState);
      // NavigationService.navigate(UnloggedRoutes.NEW_PASSWORD, {userEmail});
      return response.status;
    }
  } catch (error) {
    console.log(error);
    setAuthLoading(false, dispatchAuthState);
  }
};

export const resetPassword = async (
  userEmail: string,
  password: string,
  accessToken: string,
  dispatchAuthState: React.Dispatch<UserReducerActionT>
): Promise<any> => {
  try {
    setAuthLoading(true, dispatchAuthState);
    const response = await axios.post<string, AxiosResponse<void, any>>(
      apiRoutes.resetPassword,
      { userEmail, password },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setAuthLoading(false, dispatchAuthState);

    if (response.status === 201) {
      NavigationService.navigate(UnloggedRoutes.LOGIN);
      return response.status;
    }

    return response.status;
  } catch (error) {
    console.log(error);
    setAuthLoading(false, dispatchAuthState);
  }
};

export const disableAccount = async (userEmail: string, password: string): Promise<any> => {
  try {
    const response = await axios.put<string, AxiosResponse<void, any>>(apiRoutes.disableAccount, {
      userEmail,
      password,
    });
    if (response.status === 201) {
      NavigationService.navigate(UnloggedRoutes.LOGIN);
      return response.status;
    }
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const uploadUserImage = async (userId: string, img: any): Promise<any> => {
  try {
    const response = await axios.post<string, AxiosResponse<void, any>>(
      apiRoutes.uploadUserImage(userId),
      img
    );

    if (response.status === 201 || response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
