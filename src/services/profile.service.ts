import axios, { AxiosResponse } from "axios";
import React from "react";

//CONTEXT

//ACTIONS

//ROUTES
import apiRoutes from "../utilities/constants/apiRoutes";

//MODELS
import { Alert } from "react-native";
import { UserReducerActionT } from "../models/contextModels/AuthContext.model";
import {
  GetUserRequest,
  UserExternalT,
  UserT,
} from "../models/entitiesTypes/user";

const getUser = async (userId: string): Promise<any> => {
  try {
    const response = await axios.get<
      string,
      AxiosResponse<GetUserRequest, UserT>
    >(apiRoutes.getUser(userId));

    if (response.status === 201 || response.status === 200) {
      const data = response.data;

      return data;
    }
  } catch (error) {
    throw error;
  }
};

const editUser = async (
  userId: string,
  name: string,
  lastName: string,
  alias: string,
  email: string,
  phone: string,
  aboutMe: string,
  accessToken: string,
  dispatchAuthState: React.Dispatch<UserReducerActionT>,
  userAlias?: string
): Promise<any> => {
  try {
    if (userAlias) {
      const response = await axios.put<string, AxiosResponse<UserT, UserT>>(
        apiRoutes.editUserById(),
        {
          userId,
          userName: name,
          userLastName: lastName === "" ? null : lastName,
          userEmail: email === "" ? null : email,
          userPhone: phone === "" ? null : phone,
          biography: aboutMe === "" ? null : aboutMe,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        const data = response.data;
        // setUser(data, dispatchAuthState);
        return data;
      }
    } else {
      const response = await axios.put<string, AxiosResponse<UserT, UserT>>(
        apiRoutes.editUserById(),
        {
          userId,
          userName: name,
          userLastName: lastName === "" ? null : lastName,
          userAlias: alias === "" ? null : alias,
          userEmail: email === "" ? null : email,
          userPhone: phone === "" ? null : phone,
          biography: aboutMe === "" ? null : aboutMe,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        const data = response.data;
        // setUser(data, dispatchAuthState);
        return data;
      }
    }
  } catch (error) {
    throw error;
  }
};

const getExternalUser = async (
  userId: string,
  followerId: string
): Promise<UserExternalT> => {
  try {
    const response = await axios.get<
      string,
      AxiosResponse<UserExternalT, UserExternalT>
    >(apiRoutes.getUserExternal(userId, followerId));
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

const followById = async (followerId: string, userId: string): Promise<any> => {
  try {
    // setIsLoading(true);

    const response = await axios.post<string, AxiosResponse<any, any>>(
      apiRoutes.followById,
      {
        followerId,
        userId,
      }
    );

    if (response.status === 201 || response.status === 200) {
      const data = response.data;
      return data;
    }

    return response;

    // setIsLoading(false);
  } catch (error) {
    Alert.alert("Error", "Error while trying follow:" + error);

    // setIsLoading(false);
    throw error;
  }
};

const deleteFollowById = async (
  followerId: string,
  userId: string
): Promise<any> => {
  try {
    // setIsLoading(true);

    const response = await axios.delete<string, AxiosResponse<any, string>>(
      apiRoutes.deleteFollowById,
      {
        data: { followerId, userId },
      }
    );

    if (response.status === 201 || response.status === 200) {
      const data = response.data;
      return data;
    }

    return response;

    // setIsLoading(false);
  } catch (error) {
    Alert.alert("Error", "Error while trying follow:" + error);

    // setIsLoading(false);
    throw error;
  }
};

export { getUser, editUser, getExternalUser, followById, deleteFollowById };
