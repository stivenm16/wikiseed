import { Book } from './book';
import { Thoughts } from './thoughts';

export type UserT = {
  userId: string;
  userName: string;
  userLastName: string;
  userAlias?: string;
  userEmail: string;
  userPhone?: string;
  userRole?: null;
  userPhoto?: string;
  isSuspended?: boolean;
  password: string;
  userRefreshToken: string;
  userCodeResetPass: null;
  biography: string;
  interests?: string;
  accessToken: string;
  subscribers?: string[];
  subscriptors?: string[];
  followers?: Follow[];
  followings?: Follow[];
  books?: Book[];
  poems?: string[];
  thoughts?: Thoughts[];
  bagde?: string[];
  status: UserStatusT;
  statusCode?: number;
};

export interface UserExternalT extends UserT {
  isFollowing?: boolean;
  numberOfFollowers: number;
}

export interface MessageError {
  statusCode: number;
  message: string;
  error?: string;
}

export type UserStatusT = 'ACTIVE' | 'INACTIVE' | 'BLOCKED';

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

export interface Status {}

export interface Follow {
  userId: string;
  followerId: string;
  status: string;
  userName: string;
  userLastName: string;
}
export interface Subscriber {
  userId: string;
  subscriberId: string;
  updatedAt: string;
  createdAt: string;
}

export interface UserBadge {
  badgeId: string;
  badgeIcon: string;
  badgeRank: string;
  badgeName: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}

export interface UserRole {
  roleId: string;
  roleName: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}

//Update User Profile

export interface GetEditResponse {
  userId: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  aboutMe: string;
  accessToken: string;
}
