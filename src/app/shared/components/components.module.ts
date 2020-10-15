import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { DialogDeleteConfirmComponent } from './dialog-delete-confirm/dialog-delete-confirm.component';

@NgModule({
  declarations: [DialogDeleteConfirmComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [],
  entryComponents: [DialogDeleteConfirmComponent],
})
export class ComponentsModule {}
