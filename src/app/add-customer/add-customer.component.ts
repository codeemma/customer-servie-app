import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { HttpClientService, Customer } from '../service/httpclient.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl="/";

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
      this.customerForm = this.formBuilder.group({
          firstname: ['', Validators.required],
          surname: ['', Validators.required],
          email: ['', Validators.required],
          phone: ['', Validators.required],
          dateOfBirth: ['', Validators.required]

      });

  }

  // convenience getter for easy access to form fields
  get f() { return this.customerForm.controls; }

 onSubmit() {
      this.submitted = true;

      if (this.customerForm.invalid) {
          return;
      }

      this.loading = true;

      //TODO: handle api error
      this.httpClientService.createCustomer(new Customer("", this.f.firstname.value,
       this.f.surname.value,this.f.email.value, this.f.phone.value,  this.f.dateOfBirth.value))
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.loading = false;
              });
  }

}