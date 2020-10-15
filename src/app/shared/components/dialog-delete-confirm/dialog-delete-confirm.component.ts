import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogDeleteConfirm } from 'src/app/shared/models/dialog-delete-confirm/dialog-delete-confirm.interface';

@Component({
  selector: 'app-dialog-delete-confirm',
  templateUrl: './dialog-delete-confirm.component.html',
  styleUrls: ['./dialog-delete-confirm.component.scss'],
})
export class DialogDeleteConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogDeleteConfirm
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    console.log('On click cancel .');
    this.dialogRef.close();
  }
}
