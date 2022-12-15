import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../model/book";
import {TokenStorageService} from "../../service/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {ShareService} from "../../service/share.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;
  id: number;
  quantity:number;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private route: Router,private cartService: CartService,
              private  tokenStorageService:TokenStorageService, private toastrService:ToastrService,private shareService: ShareService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
      this.quantity=1;
    })
  }

  private getBook(id: number) {
    return this.bookService.findById(id).subscribe(data=>{
      this.book=data;
      console.log(data);
    });
  }

  MinusValue() {
    if (this.quantity>1){
      this.quantity--;
    }
  }

  addValue() {
    this.quantity++;
  }

  addToCart(bookId) {
    if (this.tokenStorageService.isLogin()) {
      const cartId = this.tokenStorageService.getCartId();
      this.cartService.addToCart(cartId, bookId, this.quantity).subscribe(
        data => {
          this.toastrService.success(data.message, 'Thông báo');
          this.shareService.sendClickEvent();
        }, error => {
          this.toastrService.warning(error.error.message, 'Thông báo');
        }
      )
    }
  }
}

