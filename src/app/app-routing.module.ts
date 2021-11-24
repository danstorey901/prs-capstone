import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { UserCreateComponent } from './misc/user/user-create/user-create.component';
import { UserDetailComponent } from './misc/user/user-detail/user-detail.component';
import { UserEditComponent } from './misc/user/user-edit/user-edit.component';
import { UserListComponent } from './misc/user/user-list/user-list.component';

const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  { path: "users/list", component: UserListComponent},
  { path: "users/create", component: UserCreateComponent},
  { path: "users/detail/:id", component: UserDetailComponent},
  { path: "users/edit/:id", component: UserEditComponent},
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
