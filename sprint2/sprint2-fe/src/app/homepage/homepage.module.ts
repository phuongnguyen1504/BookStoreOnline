import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { BodyComponent } from './body/body.component';
import { DetailComponent } from './detail/detail.component';
import { ListbookComponent } from './body/listbook/listbook.component';
import { IntroduceComponent } from './body/introduce/introduce.component';
import { FeatureComponent } from './body/feature/feature.component';
import { ContactComponent } from './body/contact/contact.component';
import {ShareModule} from "../share/share.module";
import {NgxSlickJsModule} from "ngx-slickjs";
import {FormsModule} from "@angular/forms";
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [HomepageComponent, BodyComponent, DetailComponent, ListbookComponent, IntroduceComponent, FeatureComponent, ContactComponent, CategoryListComponent],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        ShareModule,
        NgxSlickJsModule,
        FormsModule
    ]
})
export class HomepageModule { }
