import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareComponent } from './share.component';
import {LoginComponent} from "./security/login/login.component";
import {ResetPasswordComponent} from "./security/reset-password/reset-password.component";

const routes: Routes = [{path:'login',component:LoginComponent},{
  path: 'resetpassword/:token',
  component: ResetPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
