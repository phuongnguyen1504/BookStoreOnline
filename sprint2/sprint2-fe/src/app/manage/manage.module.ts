import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { BookComponent } from './book/book.component';
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ManageComponent, BookComponent],
    imports: [
        CommonModule,
        ManageRoutingModule,
        ShareModule,
        ReactiveFormsModule
    ]
})
export class ManageModule { }
