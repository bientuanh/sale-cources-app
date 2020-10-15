import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-user',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {
        path: 'list-user',
        component: ListUserComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
