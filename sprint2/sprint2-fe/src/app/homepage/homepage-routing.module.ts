import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomepageComponent} from './homepage.component';
import {BodyComponent} from "./body/body.component";
import {DetailComponent} from "./detail/detail.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {
  path: '', component: HomepageComponent, children: [
    {path: '', component: BodyComponent}
  ],
},
  {path:'home',
  component:BodyComponent},
  {path:'book/:id',component:DetailComponent},
  {path:'category/:id',component:CategoryListComponent},
  {path:'search',component:SearchComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {
}
