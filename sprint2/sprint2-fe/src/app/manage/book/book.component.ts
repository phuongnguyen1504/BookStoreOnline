import {Component, Inject, OnInit, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  formBook: FormGroup;
  listBook: Book[];
  categories: Category;
  Arr = [1, 2, 3, 4, 5]; //Array type captured in a variable
  selectedImage: any;
  @ViewChild('closebutton') closebutton;
  loading: boolean=false;

  constructor(private fb: FormBuilder, private router: Router, private bookService: BookService, private categoryService: CategoryService, private toastr: ToastrService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
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
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
    }, error => {
      console.log(error)
    });
   
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
            // this.router.navigateByUrl('/manager');
          }, error => {
            this.loading=false;
            this.toastr.error('Trường nhập liệu sai', 'Thêm mới thất bại: ', {
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
