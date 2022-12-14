import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from "../model/customer";
const api_customer = environment.customer_api;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${api_customer}/${id}`);
  }
  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${api_customer}/${id}`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(api_customer, customer);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${api_customer}/${id}`, customer);
  }
}
