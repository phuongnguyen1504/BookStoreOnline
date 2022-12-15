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
    window.sessionStorage.clear();
  }
  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

  }
  public getToken(): string {
     console.log(sessionStorage.getItem(TOKEN_KEY));
     return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUserSession(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  isLogin() {
    return sessionStorage.getItem(LOGIN_KEY);
  }

  saveCartIdSession(cartId: any) {
    window.sessionStorage.removeItem(CART_ID);
    window.sessionStorage.setItem(CART_ID,cartId);

  }
  getCartId() {
    return Number.parseInt(window.sessionStorage.getItem(CART_ID));
  }
  saveLogin() {
    window.sessionStorage.setItem(LOGIN_KEY, String(true));
  }
}
