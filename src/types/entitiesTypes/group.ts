// Generated by https://quicktype.io

export interface Group {
  content: string[];
  createdAt: string;
  groupDescription: string;
  groupId: any;
  groupImage: string;
  groupName: string;
  limitOfMembers: string;
  numberOfMembers: number;
  members: any[];
  owner: Owner;
  privacity: string;
  updatedAt: string;
  code: string;
}

export interface Owner {
  status: string;
  userEmail: string;
  userId: string;
  userLastName: string;
  userName: string;
  userPhoto: string;
}

export interface LimitMembers {
  limitId: string;
  limit: number;
  status: string;
}