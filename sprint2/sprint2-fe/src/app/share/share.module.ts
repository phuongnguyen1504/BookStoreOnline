import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './security/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ForgotPasswordComponent } from './security/forgot-password/forgot-password.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
    declarations: [ShareComponent, HeaderComponent, FooterComponent, LoginComponent, CartlistComponent, ForgotPasswordComponent, LoadingComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        ShareRoutingModule,
        ReactiveFormsModule
    ]
})
export class ShareModule { }
