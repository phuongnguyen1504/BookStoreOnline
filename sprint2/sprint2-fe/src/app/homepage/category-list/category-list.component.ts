import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  indexPagination = 0;
  books:any;
  bookfind:any;
  quantity:number;
  numberOfModal:number;
  size=5;
  sort="name";
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBook(this.indexPagination,this.sort,this.size);
    console.log(this.books);
    this.quantity=1;
  }
  // getAll(indexPagination) {
  //   this.bookService.getBook(indexPagination).subscribe(
  //     data => {
  //       this.books = data;
  //       console.log(data);
  //     });
  // }
  sizeNumber: number;

  viewById(id: any) {
    console.log(id);
    if (this.numberOfModal==null){
      this.numberOfModal=id;
      this.quantity=1;
    }
    else if (this.numberOfModal!=id){
      this.quantity=1;
    }
    this.bookService.findById(id).subscribe(
      data=>{
        this.bookfind=data;
        console.log(this.bookfind);
      }
    )

  }

  addValue() {
    this.quantity++;
  }

  MinusValue() {
    if (this.quantity>1){
      this.quantity--;
    }
  }

  onSelected(value: number) {
    this.size=value;
    this.getBook(this.indexPagination,this.sort,this.size);
    this.goToPage(0,this.size);
  }

  onSort(value: string) {
    this.sort=value;
    this.getBook(this.indexPagination,this.sort,this.size);


  }
  getBook(page,sort,size){
    this.bookService.getBook(page,sort,size).subscribe(data=>{
      this.books=data;
      console.log(data);
    })
  }

  goToPage(pageNumber, sizeNumber) {
    this.sizeNumber=sizeNumber;
    // this.size=sizeNumber;
    this.indexPagination = pageNumber;
    console.log("size"+this.size);
    console.log("page"+this.indexPagination);
    this.getBook(this.indexPagination,this.sort,sizeNumber);
  }

  goToNextOrPreviousPage(direction, size) {
    this.sizeNumber=size;
    // this.size=size;

    this.goToPage(direction === 'forward' ? this.indexPagination + 1 : this.indexPagination - 1, size);
  }

}
