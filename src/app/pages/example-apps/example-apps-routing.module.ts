import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleAppsComponent } from './example-apps.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleAppsComponent,
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
  },
  {
    path: 'kanban-board',
    component: KanbanBoardComponent,
  },
  {
    path: 'user-management',
    loadChildren: () =>
      import('./user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleAppsRoutingModule {}
