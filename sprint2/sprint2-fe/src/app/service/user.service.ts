import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
const USER_API = environment.user_api;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUserFromToken(token:String):Observable<any>{
    return this.http.get(USER_API+"/getUserFromToken?token="+token);
  }
}
