import {Dispatch} from 'react';
import {Book} from '../entitiesTypes/book';

export type BookStateT = {
//   books: Book[]
  book: Book | null
};

export type UserReducerActionT = {
  type: string;
  payload: any;
};

export interface IBookContext {
  bookState: BookStateT;
  dispatchBookState: Dispatch<UserReducerActionT>;
}
