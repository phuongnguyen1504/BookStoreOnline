import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  indexPagination = 0;
  searchValue = "";
  id:number;
  books:any;
  bookfind:any;
  quantity:number;
  numberOfModal:number;
  size=5;
  sort="book.name";
  constructor(private bookService:BookService,private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.queryParams.subscribe(p => {
      this.searchValue = p.q;
      this.getBookByQuery(this.indexPagination,this.searchValue);
    });
  }

  ngOnInit(): void {
    this.getBookByQuery(this.indexPagination,this.searchValue);
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
    this.getBookByQuery(this.indexPagination,this.searchValue);
    this.goToPage(0,this.size);
  }

  onSort(value: string) {
    this.sort=value;
    this.getBookByQuery(this.indexPagination,this.searchValue);


  }
  getBookByQuery(page, searchValue){
    this.bookService.getBookByQuery(page,searchValue).subscribe(data=>{
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
    this.getBookByQuery(this.indexPagination,this.searchValue);
  }

  goToNextOrPreviousPage(direction, size) {
    this.sizeNumber=size;
    // this.size=size;

    this.goToPage(direction === 'forward' ? this.indexPagination + 1 : this.indexPagination - 1, size);
  }

}
