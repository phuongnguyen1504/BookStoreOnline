import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CART_ID = 'cart-id'
const LOGIN_KEY = 'login'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  logOut() {
    window.localStorage.clear();
  }
  public saveTokenLocalStorage(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);

  }
  public getToken(): string {
     console.log(localStorage.getItem(TOKEN_KEY));
     return localStorage.getItem(TOKEN_KEY);
  }
  public saveUserLocalStorage(user) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  isLogin() {
    return localStorage.getItem(LOGIN_KEY);
  }

  saveCartIdSession(cartId: any) {
    window.localStorage.removeItem(CART_ID);
    window.localStorage.setItem(CART_ID,cartId);

  }
  getCartId() {
    return Number.parseInt(window.localStorage.getItem(CART_ID));
  }
  saveLogin() {
    window.localStorage.setItem(LOGIN_KEY, String(true));
  }
}
