import { Dispatch } from 'react';
import { Chapter } from '../entitiesTypes/Book';

export type ChapterStateT = {
  //   Chapters: Chapter[]
  chapter: Chapter | null;
  bookId: string | null;
};

export type UserReducerActionT = {
  type: string;
  payload: any;
};

export interface IChapterContext {
  chapterState: ChapterStateT;
  dispatchChapterState: Dispatch<UserReducerActionT>;
}
