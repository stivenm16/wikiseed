import { createSlice } from "@reduxjs/toolkit";
import { UserT } from "../../models/entitiesTypes/user";
import {
  clearLocalStorageUser,
  persistLocalStorageUser,
} from "../../utilities/localStorage.utility";

export const EmptyUserState: UserT = {
  id: "0",
  name: "",
  email: "",
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorageUser<UserT>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorageUser<UserT>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorageUser(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
