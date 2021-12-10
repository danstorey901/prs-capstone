import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';

import { E404Component } from './misc/e404/e404.component';

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


import { AboutComponent } from './misc/about/about.component';

import { RequestLinesComponent } from './misc/request/request-lines/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './misc/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './misc/requestline/requestline-edit/requestline-edit.component';
import { RequestReviewItemComponent } from './misc/request/request-review-item/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './misc/request/request-review-list/request-review-list/request-review-list.component';



const routes: Routes = [
  {path: "", redirectTo: "/users/list", pathMatch: "full"},

  { path: "users/create", component: UserCreateComponent},
  { path: "users/detail/:id", component: UserDetailComponent},
  { path: "users/edit/:id", component: UserEditComponent},
  { path: "users/list", component: UserListComponent},
  { path: "users/login", component: UserLoginComponent},


  { path: "vendors/create", component: VendorCreateComponent},
  { path: "vendors/detail/:id", component: VendorDetailComponent},
  { path: "vendors/edit/:id", component: VendorEditComponent},
  { path: "vendors/list", component: VendorListComponent},
  
  { path: "products/create", component: ProductCreateComponent},
  { path: "products/detail/:id", component: ProductDetailComponent},
  { path: "products/edit/:id", component: ProductEditComponent},
  { path: "products/list", component: ProductListComponent},

  { path: "requests/create", component: RequestCreateComponent},
  { path: "requests/detail/:id", component: RequestDetailComponent},
  { path: "requests/edit/:id", component: RequestEditComponent},
  { path: "requests/list", component: RequestListComponent},
  { path: "requests/lines/:id", component: RequestLinesComponent },
  { path: "requests/reviews", component: RequestReviewListComponent },
  { path: "requests/review/:id", component: RequestReviewItemComponent },
  
  { path: "requestlines/create/:rid", component: RequestlineCreateComponent },
  { path: "requestlines/edit/:id",    component: RequestlineEditComponent },

  {path: "about", component: AboutComponent},
  {path: "**", component: HomeComponent},


  { path: "e404", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

