import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../service/token-storage.service';
import {ShareService} from '../../service/share.service';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth/auth.service";
import {CartService} from "../../service/cart.service";

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
  constructor(private  tokenStorageService: TokenStorageService, private cartService:CartService,
              private shareService: ShareService, private route: Router, private authService: AuthService) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.loadHeader();
  }

  private loadHeader() {
    if (this.tokenStorageService.getToken()) {
      this.listCart();
      this.username = this.tokenStorageService.getUser().roles[0].name;
      this.isLoggedIn = true;
      // this.cartValue = c

    } else {
      this.isLoggedIn = false;
    }
  }
  logOut() {
    this.tokenStorageService.logOut();
    this.ngOnInit();
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
}
