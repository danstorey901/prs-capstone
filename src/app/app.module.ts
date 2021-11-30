import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { MenuComponent } from './misc/menu/menu.component';

import { UserListComponent } from './misc/user/user-list/user-list.component';
import { UserDetailComponent } from './misc/user/user-detail/user-detail.component';
import { UserEditComponent } from './misc/user/user-edit/user-edit.component';
import { UserCreateComponent } from './misc/user/user-create/user-create.component';
import { MenuItemComponent } from './misc/menu/menu-item/menu-item.component';
import { VendorCreateComponent } from './misc/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './misc/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './misc/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './misc/vendor/vendor-list/vendor-list.component';
import { ProductCreateComponent } from './misc/product/product-create/product-create.component';
import { ProductDetailComponent } from './misc/product/product-detail/product-detail.component';
import { ProductEditComponent } from './misc/product/product-edit/product-edit.component';
import { ProductListComponent } from './misc/product/product-list/product-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MenuItemComponent,

    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,

    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,

    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,

    

  

 
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
