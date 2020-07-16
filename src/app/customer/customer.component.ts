import { Component, OnInit } from '@angular/core';
import { HttpClientService, Customer } from '../service/httpclient.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[] = [];
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getCustomers().subscribe(
     response => this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
  console.log(response[0])
    this.customers=response;
}



}