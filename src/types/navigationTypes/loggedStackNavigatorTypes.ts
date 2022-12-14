import { Group } from '../entitiesTypes/group';

export type RootLoggedStackParamListT = {
  HOME: undefined;
  COMPASS: undefined;
  MORE: undefined;
  COMMENT: undefined;
  INTRODUCTIONONE: undefined;
  INTRODUCTIONTWO: undefined;
  INTRODUCTIONTHREE: undefined;
  PROFILE: { followerId: string };
  PREFERENCES: undefined;
  CREATEPROFILE: undefined;
  PROFILES: { followerId: string };
  PERSONALINFORMATION: undefined;
  EDITPROFILE: undefined;
  MYROYALTIES: undefined;
  MYMOVES: undefined;
  SECURITYACCESSIBILITY: undefined;
  PASSWORD: undefined;
  NOTIFICATIONS: undefined;
  LANGUAGE: undefined;
  HELPSUPPORT: undefined;
  BOOKDETAILED: undefined;
  OPTIONSPROFILE: undefined;
  DISABLEACCOUNT: undefined;
  CONFIRMDISABLEACCOUNT: undefined;
  ACCESSIBILITYLANGUAGE: undefined;
  CONTENTVISIBILITY: undefined;
  DATAUSAGE: undefined;
  CREATEBOOKFIRSTSCREEN: undefined;
  CREATEBOOKSECONDSCREEN: { bookId?: string };
  CREATEBOOKTHIRDSCREEN: { bookId: string; chapter: number; content: boolean };
  LOGIN: undefined;
  BOOKLISTS: undefined;
  READINGGROUPS: undefined;
  INTRODUCTIONGROUPSCREATION: undefined;
  CREATEGROUP: undefined;
  GROUPSTABS: undefined;
  EXPLOREGROUPS: undefined;
  GROUP: { id: string };
  EDITGROUP: { group: Group };
  CHAPTERS: undefined;
  DELETEPUBLICATION: undefined;
};
