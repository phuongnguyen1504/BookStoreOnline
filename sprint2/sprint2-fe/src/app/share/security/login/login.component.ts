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
  roles: string[] = [];
  @ViewChild('closebutton') closebutton;
  error: boolean=false;
  id: any;
  loading: boolean =false;
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
      username: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$')]],
      password: ['', Validators.required],
      rememberMe: []
    });
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
              this.closebutton.nativeElement.click();
              this.shareService.sendClickEvent();
            this.toastrService.success('', 'Đăng nhập thành công', {
              timeOut: 2000,
              extendedTimeOut: 1500,
              progressBar: true
            })
              this.router.navigateByUrl('');
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

  signInGoogle() {
    this.loading=true;
    this.authService.GoogleAuth();
    this.loading=false;
  }


}
