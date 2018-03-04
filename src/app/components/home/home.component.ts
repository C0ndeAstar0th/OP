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

  constructor(private _ss: StorageService,
              private _as: AuthenticationService
            ) { }

  ngOnInit() {
    this.infoUser = this._ss.getCurrentUser();
  }

}
