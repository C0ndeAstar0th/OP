import { Component, OnInit } from '@angular/core';
import { InfoUser } from '../../models/infoUser';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService } from '../../../services/storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public infoUser: InfoUser;
  public kind: string;

  constructor(
    private _ss: StorageService,
    private _as: AuthenticationService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('exit', sanitizer
      .bypassSecurityTrustResourceUrl('assets/icons/exit.svg'));
  }

  ngOnInit() {
  this.infoUser = this._ss.getCurrentUser();
    if (this.infoUser.type === '1') {
      this.kind = 'Administrador';
    } else if (this.infoUser.type === '2') {
      this.kind = 'Pagador';
    } else if (this.infoUser.type === '3') {
      this.kind = 'Veedor';
    }
  }

  public logout(): void {
          this._ss.logout();
  }

}
