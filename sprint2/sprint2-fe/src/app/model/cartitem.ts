import {Book} from "./book";

export interface Cartitem {
  id?:number;
  book?:Book;
  quantity?:number;
}
