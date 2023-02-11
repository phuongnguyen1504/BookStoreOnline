import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';

import {AuthGuardService} from "../service/auth/auth-guard.service";
import {BookComponent} from "./book/book.component";

const routes: Routes = [{ path: 'manager', component: BookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
