import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareComponent } from './share.component';
import {LoginComponent} from "./security/login/login.component";
import {ResetPasswordComponent} from "./security/reset-password/reset-password.component";
import {ChatComponent} from "./chatbot/chat/chat.component";

const routes: Routes = [{path:'login',component:LoginComponent},{
  path: 'resetpassword/:token',
  component: ResetPasswordComponent
},{path:"chat",component:ChatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
