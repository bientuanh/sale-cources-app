import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/shared/models/user-management/user-info.interface';
import { ListUserService } from 'src/app/shared/services/user-management/list-user.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor(public listUserService: ListUserService) {}

  ngOnInit(): void {}

  onChangePageSize(event: any) {
    this.listUserService.isDisplaySpinner = true;
    this.listUserService.opacityVale = 0.5;

    if (this.listUserService.pageSize !== event.pageSize) {
      this.listUserService.pageSize = event.pageSize;
    }

    this.listUserService.getUsers(event.pageIndex + 1).subscribe((result) => {
      this.listUserService.users = new MatTableDataSource<IUser>(result.body);
      this.listUserService.totalRecords = +result.headers.get('X-Total-Count');
      this.listUserService.isDisplaySpinner = false;
      this.listUserService.opacityVale = 1;
    });
  }
}
