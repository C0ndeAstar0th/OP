import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Bod } from '../components/models/tableBod';
import { Http } from '@angular/http';
@Injectable()
export class TablesService {
  constructor(private _http: HttpClient) { }

  public getStatus(st: number): Observable<Bod[]> {
    return this._http.get<Bod[]>('http://op.asproinco.com/Slim/public/api/warehouse/status/' + st);
  }
}
