import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StorageService } from '../../../../services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Options } from 'selenium-webdriver/edge';
import { userInfo } from 'os';
import { element } from 'protractor';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseService } from '../../../../services/base.service';
import { Form } from '../../../models/form';

declare let jsPDF;
@Component({
  selector: 'app-finalbasic',
  templateUrl: './finalbasic.component.html',
  styleUrls: ['./finalbasic.component.css']
})
export class FinalbasicComponent implements OnInit {
  public filesPDF: Array<File>;
  public datos: Form;
  public pdfSrc: File;
  public initDate: Date = new Date();
  public veedor: string;
  @Input() senddata: Form;

  constructor(private _ss: StorageService,
    private _bs: BaseService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.datos = this.senddata;
    this.veedor = this._ss.getCurrentUser().name + ' ' + this._ss.getCurrentUser().surname;
    this.generarPDF();
    setTimeout(() => {
      if (!this.datos) {
        this._ss.setFlow(2);
        let bod: number;
        this.route.params.subscribe(parametros => bod = parametros['bod']);
        this.route.url.subscribe(
          x => {
            if (x[0].toString() === 'home2') {
              this.router.navigate(['/home3', bod]);
            } else {
              this.router.navigate(['/home2', bod]);
            }
          }
        );
      }
     }, 1500);
  }

  public generarPDF() {
    // this.formulario.value;
    const doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontSize(11);
    doc.setLineWidth(0.1);
    /*for (let i = 30; i <= 270; i += 8) {
      doc.text(20, i, String(i));
      doc.line(30, i, 190, i);
    }
    for (let i = 30; i <= 190; i += 8) {
      doc.text(i - 4, 28, String(i));
      doc.line(i, 30, i, 270);
    }*/

    const $y = 18;

    doc.setFontType('bold');
    doc.text(32, 36 + $y, 'CIUDAD: ');
    doc.line(50, 36 + $y, 84, 36 + $y);
    doc.text(86, 36 + $y, 'FECHA: ');
    doc.line(102, 36 + $y, 140, 36 + $y);
    doc.text(142, 36 + $y, 'HORA INICIO: ');
    doc.line(168, 36 + $y, 190, 36 + $y);
    doc.text(142, 44 + $y, 'HORA SALIDA: ');
    doc.line(170, 44 + $y, 190, 44 + $y);

    doc.text(32, 76 + $y, 'NOMBRE TENEDOR: ');
    doc.line(71, 76 + $y, 190, 76 + $y);
    doc.text(32, 84 + $y, 'NOMBRE PAGADOR: ');
    doc.line(72, 84 + $y, 190, 84 + $y);
    doc.text(32, 92 + $y, 'NOMBRE REPRESENTANTE TENEDOR: ');
    doc.line(107, 92 + $y, 190, 92 + $y);
    doc.text(32, 100 + $y, 'NOMBRE VEEDOR: ');
    doc.line(69, 100 + $y, 190, 100 + $y);
    doc.text(32, 108 + $y, 'BODEGA NÚMERO: ');
    doc.line(69, 108 + $y, 190, 108 + $y);
    doc.text(32, 116 + $y, 'CANTIDAD DE CAJAS EN BODEGA: ');
    doc.line(99, 116 + $y, 190, 116 + $y);
    doc.text(32, 124 + $y, 'CANTIDAD PERITADA: ');
    doc.line(75, 124 + $y, 190, 124 + $y);

    doc.text(32, 140 + $y, 'OBSERVACIONES: ');
    doc.line(69, 140 + $y, 190, 140 + $y);
    doc.line(32, 148 + $y, 190, 148 + $y);
    doc.line(32, 156 + $y, 190, 156 + $y);
    doc.line(32, 164 + $y, 190, 164 + $y);
    doc.line(32, 172 + $y, 190, 172 + $y);
    doc.line(32, 180 + $y, 190, 180 + $y);
    // doc.line(32, 188 + $y, 190, 188 + $y);


    doc.line(32, 218 + $y, 76, 218 + $y);
    doc.text(44, 224 + $y, 'VEEDOR');
    doc.line(86, 218 + $y, 136, 218 + $y);
    doc.text(98, 222 + $y, 'TENEDOR O');
    doc.text(94, 226 + $y, 'REPRESENTANTE');
    doc.line(154, 218 + $y, 190, 218 + $y);
    doc.text(166, 224 + $y, 'PERITO');


    doc.setFontSize(8);
    doc.setLineWidth(0.03);
    doc.text(32, 230 + $y, 'NOMBRE');
    doc.line(46, 230 + $y, 76, 230 + $y);
    doc.text(32, 233 + $y, 'C.C.');
    doc.line(38, 233 + $y, 76, 233 + $y);
    doc.text(86, 230 + $y, 'NOMBRE');
    doc.line(100, 230 + $y, 136, 230 + $y);
    doc.text(86, 233 + $y, 'C.C.');
    doc.line(92, 233 + $y, 136, 233 + $y);
    doc.text(154, 230 + $y, 'NOMBRE');
    doc.line(168, 230 + $y, 190, 230 + $y);
    doc.text(154, 233 + $y, 'C.C.');
    doc.line(160, 233 + $y, 190, 233 + $y);

    // doc.addPage();
    doc.setFontType('normal');
    doc.setFontSize(11);
    doc.text(54, 35.7 + $y, 'BOGOTÁ D.C');
    doc.text(106, 35.7 + $y, this.initDate.toLocaleDateString('es-CO'));
    doc.text(174, 35.7 + $y, this.datos['initTime']);
    doc.text(174, 43.7 + $y, this.initDate.toLocaleTimeString());
    this.datos['date'] = this.initDate.toLocaleDateString('es-CO');
    this.datos['finTime'] = this.initDate.toLocaleTimeString();

    doc.text(75, 75.7 + $y, this.datos['holder'].toUpperCase());
    doc.text(75, 83.7 + $y, this.datos['judge'].toUpperCase());
    doc.text(110, 91.7 + $y, this.datos['agent'].toUpperCase());
    doc.text(74, 99.7 + $y, this.veedor.toUpperCase());
    this.datos['veedor'] = this.veedor;
    doc.text(75, 107.7 + $y, this.datos['warehouse_id'].toString());
    doc.text(102, 115.7 + $y, this.datos['quantity']);
    doc.text(78, 123.7 + $y, this.datos['judgedquantity'].toString());
    doc.text(70, 139.7 + $y, this.datos['observations'].toUpperCase());

    setTimeout(() => {
    this.pdfSrc = doc.output('dataurlstring');
    doc.autoPrint();
   const fra = (<HTMLIFrameElement>document.getElementById('marco'));
   fra.setAttribute('src', doc.output('dataurlstring')); }, 2000);

    //  doc.output('dataurlnewwindow');
    // window.open(doc.output('bloburl'), '_blank');

    // doc.save('Peritaje Bodega No ' + this.datos['warehouse_id'] + '.pdf' );

  }
  volver() {
    this._ss.setFlow(2);
    let bod: number;
    this.route.params.subscribe(parametros => bod = parametros['bod']);
    this.route.url.subscribe(
      x => {
        if (x[0].toString() === 'home2') {
          this.router.navigate(['/home3', bod]);
        } else {
          this.router.navigate(['/home2', bod]);
        }
      }
    );
  }
  fin() {
    this._ss.setFlow(1);
    this.router.navigate(['/home']);
    this._bs.isDone(this.datos);
  }
}
