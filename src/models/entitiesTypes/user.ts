import { Roles } from "./roles";

export type UserT = {
  id: string;
  name: string;
  // userLastName: string;
  // userAlias?: string;
  email: string;
  rol: Roles;
  // userPhone?: string;
  // userRole?: null;
  // userPhoto?: string;
  // isSuspended?: boolean;
  // password: string;
  // userRefreshToken: string;
  // userCodeResetPass: null;
  // accessToken: string;
  // status: UserStatusT;
  // statusCode?: number;
};

export interface MessageError {
  statusCode: number;
  message: string;
  error?: string;
}

export type UserStatusT = "ACTIVE" | "INACTIVE" | "BLOCKED";

export type CreateAccountUserT = {
  userName: string;
} & UserStandardDataT;

export type LoginUserT = UserStandardDataT;

type UserStandardDataT = {
  userEmail: string;
  password: string;
};

export interface GetUserRequest {
  userId: string;
}

export interface UserRole {
  roleId: string;
  roleName: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}
