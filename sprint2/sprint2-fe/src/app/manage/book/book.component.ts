import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Book} from "../../model/book";
import {AngularFireStorage} from "@angular/fire/storage";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  indexPagination = 0;
  books:any;
  bookfind:any;
  quantity:number;
  numberOfModal:number;
  size=5;
  sort="name";
  sizeNumber: number;
  formBook: FormGroup;
  listBook: Book[];
  categories: Category;
  Arr = [1, 2, 3, 4, 5]; //Array type captured in a variable
  selectedImage: any;
  @ViewChild('closebutton') closebutton;
  @ViewChild('inputFile') inputFile: ElementRef;

  loading: boolean=false;
  isAuth:boolean=false;

  constructor(private fb: FormBuilder, private router: Router, private bookService: BookService, private categoryService: CategoryService, private toastr: ToastrService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,private tokenStorageService:TokenStorageService) {
    if (this.tokenStorageService.getUser().roles[0].name!='ADMIN'){
      this.router.navigateByUrl("/");
    }
    console.log(this.isAuth);
    this.formBook = this.fb.group({
      id: [],
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      yearPublish: ['', [Validators.required]],
      img_url: [''],
      price: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      publisher: ['', []],
      language: ['', [Validators.required]],
      numberRating: ['', []],
      totalPages: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    clearInterval();
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
    }, error => {
      console.log(error)
    });
    this.getBook(this.indexPagination,this.sort,this.size);
    console.log(this.books);

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
  createBook() {
    // upload image to firebase
    // const nameImg=this.getCurrentDateTime();
    console.log("eror");
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.loading=true;
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.formBook.patchValue({img_url: url});
          // Call API to create book
          this.bookService.create(this.formBook.value).subscribe(() => {
            this.loading=false;
            this.toastr.success('', 'Thêm mới thành công', {
              timeOut: 2000,
              extendedTimeOut: 1500,
              progressBar: true
            })
            this.closebutton.nativeElement.click();
            this.formBook.reset();
            this.inputFile.nativeElement.value="";
            // this.router.navigateByUrl('/manager');
          }, error => {
            this.loading=false;
            this.toastr.error('Trường nhập liệu sai/Không có quyền truy cập', 'Thêm mới thất bại: ', {
              timeOut: 2000,
              extendedTimeOut: 1500,
              progressBar: true
            });
          })

        })

      })
    ).subscribe();

    // const book: Book = this.formBook.value;
    // console.log(book);


  }


  showPreview(event: any) {
    this.selectedImage = event.target.files[0];

  }

  private getCurrentDateTime() {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-us');
  }
}
