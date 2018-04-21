import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';
import { InfoUser } from '../models/infoUser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
public infoUser: InfoUser;
public flow: any;
public veedor: Boolean;
public admin: Boolean;
public payer: Boolean;
public bodout: number;


  constructor(private _ss: StorageService,
              private _as: AuthenticationService
            ) { }

  ngOnInit() {
    this.infoUser = this._ss.getCurrentUser();
    if (this.infoUser.type === '1') {
      this.admin   = true;
      this.veedor  = false;
      this.payer   = false;
    } else if (this.infoUser.type === '2') {
      this.admin   = false;
      this.veedor  = false;
      this.payer   = true;
    } else {
      this.admin   = false;
      this.veedor  = true;
      this.payer   = false;
      this.flow    = this._ss.getFlow();
    }
  }

}
