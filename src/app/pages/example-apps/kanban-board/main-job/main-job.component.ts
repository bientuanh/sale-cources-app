import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { KanbanBoardService } from 'src/app/shared/services/kanban-board/kanban-board.service';
import { DialogDeleteConfirmComponent } from 'src/app/shared/components/dialog-delete-confirm/dialog-delete-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-job',
  templateUrl: './main-job.component.html',
  styleUrls: ['./main-job.component.scss'],
})
export class MainJobComponent implements OnInit {
  @Input() index: number;
  @Input() name: string;
  @Input() data: any[];
  @Output() dropFunc = new EventEmitter();

  @ViewChild('newTaskEle') newTaskEle: ElementRef;

  newTaskName: string;

  constructor(
    private kanbanBoardService: KanbanBoardService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.newTaskName = '';
  }

  drop(event: any) {
    this.dropFunc.emit(event);
  }

  onClickAddTask(error) {
    if (!error) {
      this.kanbanBoardService.addNewTask(this.index, this.newTaskName);
      this.newTaskName = '';
    } else {
      this.newTaskEle.nativeElement.focus();
    }
  }

  onClickDeleteMainJob() {
    const dialogRef = this.dialog.open(DialogDeleteConfirmComponent, {
      width: '250px',
      data: { index: this.index },
    });

    dialogRef.afterClosed().subscribe((index) => {
      if (index >= 0) {
        this.kanbanBoardService.deleteMainJob(index);
      }
    });
  }

  onClickDeleteTask(indexMainJob: number, indexTask: number) {
    const dialogRef = this.dialog.open(DialogDeleteConfirmComponent, {
      width: '250px',
      data: { index: indexTask },
    });

    dialogRef.afterClosed().subscribe((index) => {
      if (index >= 0) {
        this.kanbanBoardService.deleteTask(indexMainJob, index);
      }
    });
  }
}
