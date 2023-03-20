import {Injectable, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import {auth} from "firebase";
import {Router} from "@angular/router";
import {User} from "../../model/user";
import {Account} from "../../model/account";
import {Oauth} from "../../model/oauth";
import {TokenStorageService} from "../token-storage.service";
import {UserService} from "../user.service";
import {ShareService} from "../share.service";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../environments/environment.prod";
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import firebase from 'firebase';

const AUTH_API = environment.api_auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any;
  userData: any;
  loading:boolean=false;
  // isLoggedIn:boolean;
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private afs: AngularFirestore, private afAuth: AngularFireAuth, private ngZone: NgZone,
              private router: Router, private tokenStorageService: TokenStorageService, private userService: UserService, private shareService: ShareService, private toastrService: ToastrService) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: Oauth = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  signup(loginRequest) :Observable<any>{
    return this.http.post(AUTH_API + '/signup', {
      name:loginRequest.name,
      email:loginRequest.username,
      account:{
        username: loginRequest.username,
        password: loginRequest.password
      }
    }, this.httpOptions);

  }
  login(loginRequest): Observable<any> {
    return this.http.post(AUTH_API + '/login', {
      username: loginRequest.username,
      password: loginRequest.password
    }, this.httpOptions);
  }

  loginSocial(loginRequest): Observable<any> {

    return this.http.post(AUTH_API + '/loginWithSocial', {
      name: loginRequest.displayName,
      account: {
        username: loginRequest.email,
        password: loginRequest.providerId
      },
      email: loginRequest.email,
      img_url: loginRequest.photoURL
    }, this.httpOptions);
  }

  // public isAuthenticated():boolean{
  //   const token=sessionStorage.getItem('auth-token');
  //   return !this.jwtHelperService.isTokenExpired(token);
  // }
  isAuthenticated() {
    const token = localStorage.getItem('auth-token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log("login success");
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    this.loading=true;
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
          this.router.navigate(['']);
          this.SetUserData(result.user);
          this.loginSocial(result.user).subscribe(
            data => {
              this.tokenStorageService.saveTokenLocalStorage(data.accessToken);
              this.userService.getUserFromToken(data.accessToken).subscribe(value => {
                  this.tokenStorageService.saveUserLocalStorage(value);
                  this.tokenStorageService.saveCartIdSession(data.cartId);
                  this.tokenStorageService.saveLogin();
                  this.loading=false;
                  this.shareService.sendClickEvent();
                  this.toastrService.success('', 'Đăng nhập thành công', {
                    timeOut: 2000,
                    extendedTimeOut: 1500,
                    progressBar: true
                  })
                  this.router.navigateByUrl('');
                }
              );
            }
          );
        }
      )
      .catch((error) => {
        this.loading=false;
          this.toastrService.error('Bạn chưa đăng nhập tài khoản google', 'Đăng nhập thất bại: ', {
            timeOut: 2000,
            extendedTimeOut: 1500,
            progressBar: true
          });
        });
  }

// Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {

    });
  }
  // Sign in with Facebook
  FacebookAuth() {

    return this.AuthLogin(new FacebookAuthProvider()).then((res: any) => {

    });
  }

// Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }


  forgotPassword(email): Observable<any> {
    return this.http.get(AUTH_API + '/forgot-password?email=' + email, this.httpOptions);
  }

  resetPassword(resetPassRequest):Observable<any> {
    return this.http.post(AUTH_API + '/reset-password', {
      password: resetPassRequest.password,
      confirmPassword: resetPassRequest.confirmPassword,
      token: resetPassRequest.token
    }, this.httpOptions);
  }

}
