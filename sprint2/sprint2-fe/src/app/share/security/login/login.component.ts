import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../service/token-storage.service';
import {NavigationEnd, Router} from '@angular/router';
import {ShareService} from '../../../service/share.service';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth/auth.service';
import {ToastrService} from "ngx-toastr";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  formSignUp: FormGroup;
  formResetPass: FormGroup;
  roles: string[] = [];
  error: boolean=false;
  id: any;
  loading: boolean =false;
  @ViewChild('modalForgot') modalForgotPass;
  @ViewChild('closBtn') closBtn;
  addClass(id:any){
    this.id=id;
  }

  constructor(private formBuilder: FormBuilder, private  el: ElementRef,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private shareService: ShareService,private toastrService: ToastrService) {}


  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]],
      password: ['', Validators.required],
      rememberMe: []
    });
    this.formSignUp = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]],
      password: ['', Validators.required]
    });
    this.formResetPass = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    });

  }
  signUp():void{
    if (this.formSignUp.valid) {
      console.log(this.formSignUp.value);
      this.authService.signup(this.formSignUp.value).subscribe(
        (data) => {
          console.log("Hello");
          this.addClass(0);
          this.formSignUp.reset();
          this.toastrService.success(data.message, 'Đăng nhập thành công', {
            timeOut: 2000,
            extendedTimeOut: 1500,
            progressBar: true
          })
        },err => {
            this.error=true;
            console.log("Hi");
            this.toastrService.error(err.error.message, 'Đăng nhập thất bại: ', {
              timeOut: 2000,
              extendedTimeOut: 1500,
              progressBar: true
            });
        });
    };
  }
  login(): void {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      this.authService.login(this.formLogin.value).subscribe(
        data => {
          this.tokenStorageService.saveTokenLocalStorage(data.accessToken);
          this.userService.getUserFromToken(data.accessToken).subscribe(value => {
              this.tokenStorageService.saveUserLocalStorage(value);
              this.tokenStorageService.saveCartIdSession(data.cartId);
              this.tokenStorageService.saveLogin();
              // this.authService.isLoggedIn = true;
              this.formLogin.reset();
              this.error=false;
              // this.shareService.sendClickEvent();
            this.toastrService.success('', 'Đăng nhập thành công', {
              timeOut: 2000,
              extendedTimeOut: 1500,
              progressBar: true
            })
            this.router.navigate(['/']);
            }
          );
        },
        err => {
          // this.authService.isLoggedIn = false;
          this.error=true;
          this.toastrService.error('Tên đăng nhập hoặc tài khoản không đúng', 'Đăng nhập thất bại: ', {
            timeOut: 2000,
            extendedTimeOut: 1500,
            progressBar: true
          });
        }
      );
    }
  }

  get username() {
    return this.formLogin.get('username');
  }

  get password() {
    return this.formLogin.get('password');
  }
  get nameSignUp() {
    return this.formSignUp.get('name');
  }
  get usernameSignUp() {
    return this.formSignUp.get('username');
  }
  get passwordSignUp() {
    return this.formSignUp.get('password');
  }
  get email() {
    return this.formResetPass.get('email');
  }

  signInGoogle() {
    this.loading=true;
    this.authService.GoogleAuth();

    this.loading=false;
  }
  FacebookAuth() {
    this.loading=true;
    this.authService.FacebookAuth();
    this.loading=false;
  }
  forgotPassword() {
    if (this.formResetPass.valid) {
      this.loading=true;
      this.authService.forgotPassword(this.formResetPass.get('email').value).subscribe(
        data => {
          this.loading=false;
          this.toastrService.success(data.message, 'Thông báo', {
            timeOut: 2000,
            extendedTimeOut: 1500,
            progressBar: true
          });
          this.closBtn.nativeElement.click();
        },
        error => {
          this.loading=false;
          this.closBtn.nativeElement.click();
          this.toastrService.warning(error.error.message, 'Thông báo', {
            timeOut: 2000,
            extendedTimeOut: 1500,
            progressBar: true
          });
        }
      );
    }
  }

  onForgotPasswordClicked() {
    this.modalForgotPass.nativeElement.showModal();
  }

}
