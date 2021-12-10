import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';

import { E404Component } from './misc/e404/e404.component';

import { MenuComponent } from './misc/menu/menu.component';
import { MenuItemComponent } from './misc/menu/menu-item/menu-item.component';

import { UserCreateComponent } from './misc/user/user-create/user-create.component';
import { UserDetailComponent } from './misc/user/user-detail/user-detail.component';
import { UserEditComponent } from './misc/user/user-edit/user-edit.component';
import { UserListComponent } from './misc/user/user-list/user-list.component';
import { UserLoginComponent } from './misc/user/user-login/user-login.component';


import { VendorCreateComponent } from './misc/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './misc/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './misc/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './misc/vendor/vendor-list/vendor-list.component';


import { ProductCreateComponent } from './misc/product/product-create/product-create.component';
import { ProductDetailComponent } from './misc/product/product-detail/product-detail.component';
import { ProductEditComponent } from './misc/product/product-edit/product-edit.component';
import { ProductListComponent } from './misc/product/product-list/product-list.component';

import { RequestCreateComponent } from './misc/request/request-create/request-create.component';
import { RequestDetailComponent } from './misc/request/request-detail/request-detail.component';
import { RequestEditComponent } from './misc/request/request-edit/request-edit.component';
import { RequestListComponent } from './misc/request/request-list/request-list.component';

import { RequestLinesComponent } from './misc/request/request-lines/request-lines/request-lines.component';

import { RequestReviewItemComponent } from './misc/request/request-review-item/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './misc/request/request-review-list/request-review-list/request-review-list.component';
import { RequestlineEditComponent } from './misc/requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './misc/requestline/requestline-create/requestline-create.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,

    MenuComponent,
    MenuItemComponent,

    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    UserLoginComponent,
  

    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,

    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,

    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestListComponent,
    RequestLinesComponent,
    RequestReviewItemComponent,
    RequestReviewListComponent,
    RequestlineEditComponent,
    RequestlineCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
