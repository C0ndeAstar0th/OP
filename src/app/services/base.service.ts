import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Form } from '../components/models/form';


@Injectable()
export class BaseService {
public bodegas: any;
public bodega: any;
public form: Form;

  constructor( private _http: Http ) {
    this.getundones();
  }

  getundones(): Observable<any> {
      return this._http.get('http://appslim/api/warehouse/isdone/0')
      .map(x => this.getDatos(x.json()));
  }
  getStatus(st: number): Observable<any> {
    return this._http.get('http://appslim/api/warehouse/status/' + st)
      .map(x => this.getDatos(x.json()));
  }

  getDatos(data: Response) {
    const datos = data;
    return datos;
  }
  getInfoBodega(bod: number) {
    return this._http.get('http://appslim/api/warehouse/id/' + bod)
      .map(x => this.getDatos(x.json()));
  }

  getForm(id: number): Observable<any> {
    return this._http.get('http://appslim/api/warehouse/form/' + id)
      .map(x => this.getDatos(x.json())
      );
  }
  setProcess(id: number, userid: number): Observable<any> {
    const putUrl = 'http://appslim/api/warehouse/process';
    const headerss = new Headers();
    headerss.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(putUrl, { 'id': id, 'userid': userid }, {headers: headerss});
}
  isDone(data: Form) {
    const datos = JSON.stringify(data);
    const headerss = new Headers();
    headerss.append('Content-Type', 'application/x-www-form-urlencoded');
    const doneUrl = 'http://appslim/api/warehouse/done';
return this._http.post(doneUrl, datos, {headers: headerss});
  }

getUsers(user: number) {
  return this._http.get('http://appslim/api/usuarios/' + user)
    .map(x => this.getDatos(x.json()));
  }
}
