import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
const apiUrl=environment.api_book;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getAll(page):Observable<any[]>{
    return this.http.get<any[]>(apiUrl+'?page='+page);
  }
  findById(id:number):Observable<Book>{
    return this.http.get<Book>(`${apiUrl}/${id}`);
  }
  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(`${apiUrl}/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(apiUrl, book);
  }

  update(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${apiUrl}/${id}`, book);
  }

  getSize(page:any,size: any):Observable<any[]> {
    return this.http.get<any[]>(apiUrl+'?page='+page+'&size='+size);

  }

  getBook(page: number, sort: any,size:any) {
    return this.http.get<any[]>(apiUrl+'?page='+page+'&sort='+sort+'&size='+size);
    console.log(apiUrl+'?page='+page+'&sort='+sort+'&size='+size);

  }
}
