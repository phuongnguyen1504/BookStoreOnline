import {Cart} from "./cart";
import {Order} from "./order";
import {Account} from "./account";

export interface User {
  id?:number;
  name?: string;
  birthday?: string;
  email?: string;
  gender?: boolean;
  // displayName: string;
  img_url?: string;
  phone?:string;
  address?:string;
  account?: Account;
  cart?:Cart;
  order?:Order[];

}
