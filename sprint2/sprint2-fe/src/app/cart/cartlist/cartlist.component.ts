import {Component, ElementRef, OnInit} from '@angular/core';
import {Cartitem} from "../../model/cartitem";
import {CartService} from "../../service/cart.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {AuthService} from "../../service/auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  cartItems: Cartitem[]=[];
  totalPrice=0;
  cartItem: Cartitem;

  constructor(private cartService:CartService,private tokenStorageService:TokenStorageService, private authService:AuthService, private el:ElementRef, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCartByUsername();
  }


  private getCartByUsername() {
    if(this.tokenStorageService.isLogin()){
      return this.cartService.getCartByUsername(this.tokenStorageService.getUser().username).subscribe(data=>{
        this.cartItems =data;
        console.log(this.cartItems);
        this.calcTotalPrice();
      })
    }
  }

  private calcTotalPrice() {
    this.totalPrice=0;
    this.cartItems.forEach(c=> this.totalPrice+=(c.book.price*c.quantity));
  }

  subQuantity(cartId: any, bookId: any) {
    const inputQuantity = this.el.nativeElement.querySelector('#inputQuantity' + cartId + bookId);
    if (this.tokenStorageService.isLogin()) {
      if (Number(inputQuantity.value) > 1) {
        this.cartService.updateCartItem(cartId, bookId, Number(inputQuantity.value) - 1).subscribe(
          data => {
            inputQuantity.value--;
            this.getCartByUsername();
          }, error => {
            this.toastrService.warning(error.error.message, 'Thông báo');
          }
        )
      }
    }
  }

  addQuantity(cartId: any, bookId: any) {
    const inputQuantity = this.el.nativeElement.querySelector('#inputQuantity' + cartId + bookId);
    if (this.tokenStorageService.isLogin()) {
      this.cartService.updateCartItem(cartId, bookId, Number(inputQuantity.value) + 1).subscribe(
        data => {
          inputQuantity.value++;
          this.getCartByUsername();
        }, error => {
          this.toastrService.warning(error.error.message, 'Thông báo');
        }
      )
    }
  }

  deleteCartItem(cartId: any, bookId: any) {
    this.cartService.deleteCartItem(cartId, bookId).subscribe(
      data => {
        this.toastrService.success(data.message, 'Thông báo');
        this.getCartByUsername();
      }, error => {
        this.toastrService.warning(error.error.message, 'Thông báo');
        this.getCartByUsername();
      }
    )
  }

  changeQuantity(cartId: any, bookId: any, i: number) {
    const inputQuantity = this.el.nativeElement.querySelector('#inputQuantity' + cartId + bookId);
    if (this.tokenStorageService.isLogin()) {
      if (Number(inputQuantity.value) > 1) {
        this.cartService.updateCartItem(cartId, bookId, Number(inputQuantity.value)).subscribe(
          data => {
            this.getCartByUsername();
          }, error => {
            this.toastrService.warning(error.error.message, 'Thông báo');
            this.getCartByUsername();
          }
        )
      } else {
        this.getCartByUsername();
      }
    }
  }

  addShing(number: number) {
    
  }
}
