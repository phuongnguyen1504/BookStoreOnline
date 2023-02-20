import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './security/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ResetPasswordComponent } from './security/reset-password/reset-password.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
    declarations: [ShareComponent, HeaderComponent, FooterComponent, LoginComponent, CartlistComponent, ResetPasswordComponent, LoadingComponent],
  exports: [
    HeaderComponent,
    FooterComponent,ResetPasswordComponent
  ],
    imports: [
        CommonModule,
        ShareRoutingModule,
        ReactiveFormsModule
    ]
})
export class ShareModule { }
