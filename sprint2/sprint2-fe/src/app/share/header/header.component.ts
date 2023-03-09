import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../service/token-storage.service';
import {ShareService} from '../../service/share.service';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from "../../service/auth/auth.service";
import {CartService} from "../../service/cart.service";
import {CategoryService} from "../../service/category.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username: string;
  role: string;
  visible: boolean;
  listCategory: any;
  formSearch: FormGroup;
  messageButton=true;
  amountOfCart: number=0;
  constructor(private  tokenStorageService: TokenStorageService, private cartService:CartService,private categoryService: CategoryService,
              private shareService: ShareService, private route: Router, private authService: AuthService, private toastrService: ToastrService) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
      route.events.subscribe(value => {
        if (value instanceof NavigationEnd){
          if (value.url=='/manager'){
            this.messageButton=false;
          } else {
            this.messageButton=true;
          }
        }
      })
    });
  }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      searchValue: new FormControl()
    })
    this.categoryService.findAll().subscribe(data=>{
      this.listCategory=data;

    },error => {console.log(error)})
    this.loadHeader();
  }

  private loadHeader() {
    if (this.tokenStorageService.getToken()) {
      this.listCart();
      this.username = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0].name;
      this.isLoggedIn = true;
      this.cartService.getNumberOfCart(this.tokenStorageService.getUser().username).subscribe(data=>{
        this.amountOfCart=data;
      },error => {console.log(error)})
      // this.cartValue = c

    } else {
      this.isLoggedIn = false;
    }
  }
  logOut() {
    this.tokenStorageService.logOut();
    this.ngOnInit();
    this.toastrService.success('Đăng xuất thành công', 'Thông báo', {
      timeOut: 2000,
      extendedTimeOut: 1500,
      progressBar: true
    });
    this.amountOfCart=0;
    this.route.navigateByUrl('');
  }
  toggleCollapse() {
    this.visible = !this.visible;
  }
  hideCollapse() {
    this.visible = true;
  }
  isLogIn(value) {
    this.isLoggedIn = value;
  }

  HideCollapse() {
    this.visible = true;
  }

  listCart() {

  }

  onSearch() {
    this.route.navigateByUrl("/search?q=" + this.formSearch.get('searchValue').value + '&page=0');
  }
}
