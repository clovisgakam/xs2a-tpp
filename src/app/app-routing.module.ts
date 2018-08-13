import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {PaymentStatusComponent} from './payment-status/payment-status.component';

const routes: Routes = [
  {path: '' , component: PaymentComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/:id', component: PaymentStatusComponent},
  {path: '**', redirectTo: 'payment'},
]
@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
