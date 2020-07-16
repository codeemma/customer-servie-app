import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Customer{
  constructor(
    public id:string,
    public firstname:string,
    public surname:string,
    public email:string,
    public phone:string,
    public dateOfBirth:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

  public getCustomers()
  {
    console.log("test call");
    return this.httpClient.get<Customer[]>('http://localhost:8080/api/customers');
  }

  public deleteCustomer(customer) {
    return this.httpClient.delete<Customer>("http://localhost:8080/api/customers" + "/"+ customer.id);
  }

  public createCustomer(customer) {
    return this.httpClient.post<Customer>("http://localhost:8080/api/customers", customer);
  }
}