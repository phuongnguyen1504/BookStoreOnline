import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../model/user";
const api_customer = environment.customer_api;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  findById(id: number): Observable<User> {
    return this.http.get<User>(`${api_customer}/${id}`);
  }
  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${api_customer}/${id}`);
  }

  create(customer: User): Observable<User> {
    return this.http.post<User>(api_customer, customer);
  }

  update(id: number, customer: User): Observable<User> {
    return this.http.put<User>(`${api_customer}/${id}`, customer);
  }
}
