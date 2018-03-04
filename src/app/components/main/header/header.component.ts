import { Component, OnInit } from '@angular/core';
import { InfoUser } from '../../models/infoUser';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public infoUser: InfoUser;

  constructor(
    private _ss: StorageService,
    private _as: AuthenticationService
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.infoUser = this._ss.getCurrentUser();
  }

  public logout(): void {
          this._ss.logout();
  }

}
