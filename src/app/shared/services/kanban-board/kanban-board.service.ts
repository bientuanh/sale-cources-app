import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KanbanBoardService {
  constructor() {}

  kabanBoardInfos = [
    {
      id: 1,
      name: 'Todo',
      jobs: [
        'Get to sleep',
        'Go home',
        'Fall asleep',
        'Get to sleep',
        'Go home',
      ],
    },
    {
      id: 2,
      name: 'Doing',
      jobs: ['Go home', 'Fall asleep'],
    },
    {
      id: 3,
      name: 'Done',
      jobs: ['Go home'],
    },
  ];

  addMainJob(payLoad: any) {
    this.kabanBoardInfos = [
      ...this.kabanBoardInfos,
      {
        id: 10,
        name: payLoad,
        jobs: [],
      },
    ];
  }

  addNewTask(index: number, newTaskName: string) {
    this.kabanBoardInfos[index].jobs.push(newTaskName);
  }

  deleteMainJob(index: number) {
    this.kabanBoardInfos.splice(index, 1);
  }

  deleteTask(indexMainJob: number, indexTask: number) {
    this.kabanBoardInfos[indexMainJob].jobs.splice(indexTask, 1);
  }
}
