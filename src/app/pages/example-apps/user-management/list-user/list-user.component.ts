import { Component, OnInit } from '@angular/core';
import { ListUserService } from 'src/app/shared/services/user-management/list-user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/shared/models/user-management/user-info.interface';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { _MatTabGroupBase } from '@angular/material/tabs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  constructor(public listUserService: ListUserService) {}

  displayedColumns: string[] = ['avatar', 'name', 'email', 'birthday'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.listUserService.getUsers(1).subscribe((result) => {
      this.listUserService.users = new MatTableDataSource<IUser>(result.body);
      this.listUserService.totalRecords = +result.headers.get('X-Total-Count');
      this.listUserService.users.sort = this.sort;
      this.listUserService.users.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {}
}
