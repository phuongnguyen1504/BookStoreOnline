import { Category } from './category';
import {Cartitem} from './cartitem';
import {Orderdetail} from './orderdetail';
export interface Book {
  id?:number;
  name?:string;
  author?:string;
  yearPublish?:Date;
  img_url?:string;
  price?:number;
  amount?:number;
  publisher?:string;
  language?:string;
  numberRating?:number;
  totalPages?:number;
  weight?:number;
  category?: Category;
  description?:string;
  carts?:Cartitem;
  orders?:Orderdetail;
}
