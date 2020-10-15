import { Injectable } from '@angular/core';
import { IConditionParam } from 'src/app/shared/models/service/condition-param';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  convertQueryStr(params: IConditionParam): string {
    let qr = '?';

    for (let [key, value] of Object.entries(params)) {
      if (key === 'conditions') {
        value.forEach((con: any) => {
          qr = qr + con.key + con.type + con.value + '&';
        });
        qr = qr.slice(0, -1);
      } else if (key === 'fields') {
        // TODO
      } else if (key === 'sortFields') {
        qr = qr + '&_sort=';
        value.forEach((sortInfo) => {
          qr = qr + sortInfo.field + ',';
        });
        qr = qr.slice(0, -1);

        qr = qr + '&_order=';
        value.forEach((sortInfo) => {
          if (sortInfo.desc) {
            qr = qr + 'desc' + ',';
          } else {
            qr = qr + 'asc' + ',';
          }
        });
        qr = qr.slice(0, -1);
      } else if (key === 'page') {
        qr = qr + '&_page=' + value;
      } else if (key === 'limit') {
        qr = qr + '&_limit=' + value;
      }
    }

    console.log(qr)
    return qr;
  }
}
