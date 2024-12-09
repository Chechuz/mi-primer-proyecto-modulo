import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'angular-backend.azurewebsites.net/customers';
  private headers = new HttpHeaders({
    'Content-Type': 'application-json',
    'apikey': '1234567890.'
  });

  constructor(private http: HttpClient, private core: CoreService) { }  

  getCustomers(company: string = '', city: string = '', country: string = ''): Observable<Array<Customer>> {
    let params: string = '';
 
    if(!this.core.isNullOrEmpty(company)) {
      params += (params === '' ? '?' : '&') + `company=${company}`;
    }
 
    if(!this.core.isNullOrEmpty(city)) {
      params += (params === '' ? '?' : '&') + `city=${city}`;
    }
 
    if(!this.core.isNullOrEmpty(country)) {
      params += (params === '' ? '?' : '&') + `country=${country}`;
    }
 
    return this.http.get<Array<Customer>>(this.apiUrl + params, { headers: this.headers });
  }

  getCustomerById(id: string): Observable<Customer>{
    return this.http.get<Customer>('${this.eapiUrl}/${id}', {headers: this.headers});
  }
}
