import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [

  { path:'', component: CustomerComponent, canActivate: [AuthGuard] },
  { path:'addcustomer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
