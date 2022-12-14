import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CustomerService} from "../../service/customer.service";
import {Cartitem} from "../../model/cartitem";
import {TokenStorageService} from "../../service/token-storage.service";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  @Input() item: string;
  cartItems: Cartitem[]=[];
  totalPrice=0;
  cartItem: Cartitem;

  constructor(private cartService:CartService,private tokenStorageService:TokenStorageService, private authService:AuthService, private el:ElementRef) { }

  ngOnInit(): void {
    this.getCartByUsername();
  }


  private getCartByUsername() {
    if(this.tokenStorageService.isLogin()){
      return this.cartService.getCartByUsername(this.tokenStorageService.getUser().username).subscribe(data=>{
        this.cartItems =data;
        console.log("listcart"+data);
        this.calcTotalPrice();
      })
    }
  }

  private calcTotalPrice() {
    this.totalPrice=0;
    this.cartItems.forEach(c=> this.totalPrice+=(c.book.price*c.quantity));
  }
}
