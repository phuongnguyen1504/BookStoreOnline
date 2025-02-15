import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
const api_cart=environment.cart_api;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartByUsername(username):Observable<any> {
    return this.http.get<any>(api_cart+'/getCartByUsername?username='+username);
  }
  getNumberOfCart(username):Observable<any> {
    return this.http.get<any>(api_cart+'/getNumberOfCart?username='+username);
  }

  addToCart(cartId: number, bookId, quantity: number) {
    return this.http.get<any>(api_cart + '/addToCart?cartId=' + cartId + '&bookId=' + bookId + '&amount=' + quantity);
  }
  deleteCartItem(cartId, bookId): Observable<any> {
    return this.http.delete<any>(api_cart + '/' + cartId + '/' + bookId);
  }
  updateCartItem(cartId, bookId, amount): Observable<any>{
    return this.http.get<any>(api_cart + '/updateCartItem?cartId=' + cartId + '&bookId=' + bookId + '&amount=' + amount);
  }
}
