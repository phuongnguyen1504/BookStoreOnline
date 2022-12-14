import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import {ShareModule} from "../share/share.module";
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [OrderComponent, CartComponent, PaymentComponent],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ShareModule
    ]
})
export class OrderModule { }
