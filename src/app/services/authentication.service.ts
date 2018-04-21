import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../components/models/user';
import { Session } from 'protractor';


@Injectable()
export class AuthenticationService {
  private apiUrl = 'http://appslim/api/auth';

  constructor(private http: Http) { }

  login(user: User): Observable <Session> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({headers: headers});
  return  this.http.post(this.apiUrl, {'username': user.username,
          'password': user.password}, {headers: headers})
          .map(this.getDatos);
  }

  getDatos(data: Response) {
     const datos = data.json();
     return datos;
  }

}
