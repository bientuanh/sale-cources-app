import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user-management/user-info.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';
import { ConditionType } from '../../enum/service/search-condition.enum';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class ListUserService implements OnInit {
  constructor(private http: HttpClient, private commonService: CommonService) {}

  api = environment.baseApi;
  pageSize: number = 5;
  users: MatTableDataSource<IUser>;
  totalRecords: number;
  isDisplaySpinner: boolean = true;
  opacityVale = 0.5;

  ngOnInit(): void {}

  getUsers(pageIndex: number): Observable<HttpResponse<IUser[]>> {
    const fields = ['name', 'email', 'birthday', 'avatar'];
    const sortFields = [{ field: 'name', desc: false }];

    const qr = this.commonService.convertQueryStr({
      fields,
      sortFields,
      page: pageIndex,
      limit: this.pageSize,
    });

    return this.http.get<IUser[]>(this.api + '/users' + qr, {
      observe: 'response',
    });
  }

  getUsersByName(name: string): Observable<IUser[]> {
    const conditions = [
      {
        key: 'name',
        value: name,
        type: ConditionType.Equal,
      },
    ];
    const fields = ['name', 'email', 'birthday', 'avatar'];
    const sortFields = [{ field: 'name', desc: true }];

    const qr = this.commonService.convertQueryStr({
      conditions,
      fields,
      sortFields,
    });

    return this.http.get<IUser[]>(this.api + '/users' + qr);
  }

  addUser(userInfo: any) {
    return this.http.post(this.api + '/users', userInfo);
  }
}
