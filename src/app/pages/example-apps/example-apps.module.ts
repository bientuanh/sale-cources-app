import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';
import { ExampleAppsRoutingModule } from './example-apps-routing.module';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';
import { UserManagementModule } from './user-management/user-management.module';
import { ContainerModule } from 'src/app/container/container.module';

import { ExampleAppsComponent } from './example-apps.component';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi-VN');

@NgModule({
  declarations: [ExampleAppsComponent],
  imports: [
    CommonModule,
    ExampleAppsRoutingModule,
    ShoppingCardModule,
    KanbanBoardModule,
    UserManagementModule,
    ContainerModule,
  ],
})
export class ExampleAppsModule {}
