import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
const api_cart=environment.cart_api;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartByUsername(username):Observable<any> {
    return this.http.get<any>(api_cart+'/getCartByUsername?username='+username);
  }
}
