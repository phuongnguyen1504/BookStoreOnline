import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShareModule} from './share/share.module';
import {HomepageModule} from './homepage/homepage.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OrderModule} from './order/order.module';
import {NgxSlickJsModule} from 'ngx-slickjs';
import { FocusInvalidInputDirectiveDirective } from './helpers/focus-invalid-input-directive.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./helpers/jwt-interceptor";
import {CartModule} from "./cart/cart.module";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {ManageModule} from "./manage/manage.module";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AuthService} from "./service/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    FocusInvalidInputDirectiveDirective
  ],
    imports: [
      HomepageModule,
      CartModule,
      ReactiveFormsModule,
      FormsModule,
      OrderModule,
      NgxSlickJsModule.forRoot({
        links: {
          jquery: 'https://code.jquery.com/jquery-3.4.0.min.js',
          slickJs: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
          slickCss: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
          slickThemeCss: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'
        }
      }),
      HttpClientModule,
      ToastrModule.forRoot(),
        BrowserModule,
      BrowserAnimationsModule,
        AppRoutingModule,
        ShareModule,
      ManageModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
