import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/user-management/user-info.interface';
import { ListUserService } from 'src/app/shared/services/user-management/list-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(
    public router: Router,
    private listUserService: ListUserService
  ) {}

  ngOnInit(): void {}

  onClickReloadTable() {
    this.listUserService.isDisplaySpinner = true;
    this.listUserService.opacityVale = 0.5;

    this.listUserService.getUsers(1).subscribe((result) => {
      this.listUserService.users = new MatTableDataSource<IUser>(result.body);
      this.listUserService.totalRecords = +result.headers.get('X-Total-Count');
      this.listUserService.isDisplaySpinner = false;
      this.listUserService.opacityVale = 1;
    });
  }
}
