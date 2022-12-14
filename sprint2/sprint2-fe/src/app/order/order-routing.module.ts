import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import {CartComponent} from "./cart/cart.component";
import {PaymentComponent} from "./payment/payment.component";

const routes: Routes = [{ path: 'cart', component: CartComponent },{path:'payment',component:PaymentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
