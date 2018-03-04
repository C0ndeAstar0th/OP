import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../services/storage.service';
import { User } from '../models/user';
import { Session } from '../models/session';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: User = new User();
  error = '';
  loading: Boolean = false;
  listo: Boolean = true;

   resolved(captchaResponse: String) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
     if (captchaResponse != null) {
       this.listo = false;
    }
  }
  constructor(
    private router: Router,
    private _as: AuthenticationService,
    private _ss: StorageService
  ) { }

  ngOnInit() {
    this._ss.logout();
    }

  login(username: string, password: string): void {
    this.model.username = username;
    this.model.password = password;
    this.loading = true;

    this._as.login(this.model).subscribe(
      result => {
        // tslint:disable-next-line:triple-equals
        if (result['infoUser']['id']) {
           this.correctLogin(result);
        } else {
          this.wrongTry(result);
        }
      });
  }

  private wrongTry(data) {
    if (data['error'] === '1') {
      this.error = 'Código no existe';
      this.loading = false;
      this.listo = true;
      grecaptcha.reset();
    } else if (data['error'] === '2') {
      this.error = 'Contraseña Incorrecta';
      this.loading = false;
      grecaptcha.reset();
      this.listo = true;
    } else if (data['error'] === '3') {
      this.error = 'Ingresa código y contraseña válidos por favor';
      this.loading = false;
      grecaptcha.reset();
      this.listo = true;
    }
  }

  private correctLogin(data) {
    this._ss.setCurrentSession(data);
    this.router.navigate(['/home']);
  }
  }

