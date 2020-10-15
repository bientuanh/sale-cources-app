import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { KanbanBoardComponent } from './kanban-board.component';
import { AddListComponent } from './add-list/add-list.component';
import { MainJobComponent } from './main-job/main-job.component';

@NgModule({
  declarations: [
    KanbanBoardComponent,
    AddListComponent,
    ListComponent,
    MainJobComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
})
export class KanbanBoardModule {}
