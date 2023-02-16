import {Role} from "./role";

export interface Account {
  username?:string;
  password?:string;
  role?:Role[];
}
