import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {CartlistComponent} from "./cartlist/cartlist.component";

const routes: Routes = [{
  path: 'cart',
  component: CartlistComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
