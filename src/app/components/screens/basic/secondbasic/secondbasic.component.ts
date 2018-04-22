import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { BaseService } from '../../../../services/base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../../../models/form';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthenticationService } from '../../../../services/authentication.service';
import { InfoUser } from '../../../models/infoUser';
import { StorageService } from '../../../../services/storage.service';
import { User } from '../../../models/user';


@Component({
  selector: 'app-secondbasic',
  templateUrl: './secondbasic.component.html',
  styleUrls: ['./secondbasic.component.css']
})

export class SecondbasicComponent implements OnInit {

  public bod: number;
  public data: Form = new Form();
  public senddata: Form;
  public Form: FormGroup;
  public confirm: number;
  public pass: string;
  public infoUser: InfoUser;
  public login: User = new User();
  public error: Boolean = false;
  public msgError: string;
  public flow: any;
  public initTime: Date = new Date();

  constructor(private _bs: BaseService,
    private _as: AuthenticationService,
    private _ss: StorageService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _dialog: MatDialog,
    private router: Router ) {
    route.params.subscribe(parametros => this.bod = parametros['bod']);
    this._bs.getForm(this.bod).subscribe(
      result => {
        this.assignForm(result);
      }
    );

    this.Form = this.formBuilder.group({
      perito: new FormControl(),
      representante: new FormControl(),
      cantidadPeritada: new FormControl(),
      observaciones: new FormControl()
    });

  }

  ngOnInit() {
    this.flow = this._ss.getFlow();
  }

  public assignForm(res: Form) {
    this.data = res;

    this.data['initTime'] = this.initTime.toLocaleTimeString();
  }

  public addDataForm(form: any): void {
    this.error = false;
    if (!form.perito) {
    this.error = true;
    this.msgError = 'El Nombre del perito no puede estar vacío';
    } else if (!form.cantidadPeritada) {
      this.error = true;
      this.msgError = 'Por favor ingrese la cantidad peritada';
    } else {
      if (form.representante) {
        this.data['agent'] = form.representante;
      } else {
        this.data['agent'] = 'N/A';
      }
      if (form.observaciones) {
        this.data['observations'] = form.observaciones;
      } else {
        this.data['observations'] = 'N/A';
      }
    this.data['judge'] = form.perito;
    this.data['judgedquantity'] = form.cantidadPeritada;
    this.data['warehouse_id'] = this.bod;
    this.openDialog(); }
  }

  openDialog() {
    const dialogRef = this._dialog.open(DialogContent, {
      width: '250px',
      data: { numero: this.confirm }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.confirm = result;

      if (!this.confirm) {
        this.error = true;
        this.msgError = 'Por favor confirme la cantidad peritada';
      } else if (this.confirm === this.data['judgedquantity']) {
        this.openConfirm();
      } else {
        this.error = true;
        this.msgError = `La cantidad peritada confirmada no concuerda
                          con la ingresada en el formulario`;
      }
    });
  }

  openConfirm() {
    const dialogRef = this._dialog.open(DialogConfirm, {
      width: '250px',
      data: { pass: this.pass }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.infoUser = this._ss.getCurrentUser();
        this.login.username = this.infoUser.username;
        this.login.password = result;
        this._as.login(this.login).subscribe(
          rep => {
            if (rep['id'] === this.infoUser.id) {
              this.senddata = this.data;
              this._ss.setFlow(3);
              this.flow = this._ss.getFlow();
             // console.log(this.senddata);
              // setTimeout(() => { this.router.navigate(['/home3', this.bod]);
             // }, 1500);
            } else {
              this.error = true;
              this.msgError = `La contraseña ingresada no coincide con su usuario,
              por favor ingrese su contraseña`;
            }
          });
      }
    });
  }

}

@Component({
  template: `<div mat-dialog-content class="maindiv">
  <p style= "color: indigo">Para continuar por favor digite <strong>la cantidad peritada</strong> de nuevo.</p>
  <mat-form-field>
    <input matInput type="number" [(ngModel)]="dato.numero" required>
  </mat-form-field>
</div>
<div mat-dialog-actions style="text-align: center">
  &emsp;&emsp;&emsp;<button mat-button color="primary" [mat-dialog-close]="dato.numero" cdkFocusInitial>Continuar</button>
</div>`,
})
// tslint:disable-next-line:component-class-suffix
export class DialogContent {

  constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public dato) { }

}

@Component({
  template: `<div mat-dialog-content class="maindiv">
  <p style= "color: #1baef8">Para continuar por favor digite de nuevo su <strong>contraseña</strong>.</p>

  <mat-form-field>
    <input matInput type="password" [(ngModel)]="dato.pass" required>
  </mat-form-field>

</div>
<div mat-dialog-actions style="text-align: center">
  &emsp;&emsp;&emsp;<button mat-button color="primary" [mat-dialog-close]="dato.pass" cdkFocusInitial>Continuar</button>
</div>`,
})
// tslint:disable-next-line:component-class-suffix
export class DialogConfirm {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirm>,
    @Inject(MAT_DIALOG_DATA) public dato) { }

}
