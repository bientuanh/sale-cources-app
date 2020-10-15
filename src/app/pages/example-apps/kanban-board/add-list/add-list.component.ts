import { Component, OnInit } from '@angular/core';
import { KanbanBoardService } from 'src/app/shared/services/kanban-board/kanban-board.service';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent implements OnInit {
  constructor(public kanbanBoardService: KanbanBoardService) {}

  @ViewChild('mainJobEle') mainJobInputElement: ElementRef;

  mainJobName: string;
  isDisplayAgain: boolean;

  ngOnInit(): void {
    this.mainJobName = '';
  }

  onClickAddMainJob(errorEvent: any) {
    if (errorEvent) {
      this.mainJobInputElement.nativeElement.focus();
    } else {
      this.kanbanBoardService.addMainJob(this.mainJobName);
      this.mainJobName = '';
    }
  }
}
