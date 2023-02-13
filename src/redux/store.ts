import { configureStore } from "@reduxjs/toolkit";
import { UserT } from "../models/entitiesTypes/user";
import userSliceReducer from "./states/user";

export interface AppStore {
  user: UserT;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
});
