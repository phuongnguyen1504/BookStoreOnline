import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AuthGuardService} from "../service/auth/auth-guard.service";
import {CartlistComponent} from "./cartlist/cartlist.component";

const routes: Routes = [{
  path: 'cart',
  component: CartlistComponent,
  canActivate: [AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
