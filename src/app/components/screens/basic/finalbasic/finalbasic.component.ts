import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
declare let jsPDF;
@Component({
  selector: 'app-finalbasic',
  templateUrl: './finalbasic.component.html',
  styleUrls: ['./finalbasic.component.css']
})
export class FinalbasicComponent {
  constructor() {
  }
  public generarPDF() {
    // this.formulario.value;
    const doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontSize(11);
    doc.setLineWidth(0.1);
   /* for (let i = 30; i <= 270; i += 8) {
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

    doc.addPage();
    doc.text(20, 20, 'http://www.coding4developers.com/');

    doc.setFontType('normal');
    const pdfBase64 = doc.output('datauristring');

    // doc.autoPrint();
    // window.open(doc.output('bloburl'), '_blank');
    // doc.save('AsignacionAsersorInterno.pdf');
  }
}

