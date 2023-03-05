import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/chatbot/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:8080/chat/user";
  constructor(private httpClient:HttpClient) { }
  getAll(){
    return this.httpClient.get<User[]>(this.baseUrl+"/getall");
  }
  addUser(user:User):Observable<Object>{
    return this.httpClient.post(this.baseUrl+"/add",user);
  }
  getUserByUsername(username: any) {
    return this.httpClient.get<User>(this.baseUrl + "/getbyusername/" + username);
  }
}
