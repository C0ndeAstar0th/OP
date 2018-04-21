import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BaseService } from '../../../../services/base.service';
import { StorageService } from '../../../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstbasic',
  templateUrl: './firstbasic.component.html',
  styleUrls: ['./firstbasic.component.css']
})
export class FirstbasicComponent implements OnInit {
 public bodegas: any[];
 public fullbodegas: any[] = [];
 public selected: number;

  constructor( private _bs: BaseService,
               private _ss: StorageService,
              private router: Router) {}

  ngOnInit() {
    this._bs.getundones().subscribe(
      result => {
        this.bodegas = result;
        this.selected  = result[0]['id'];
        this.makeArray();
      });
  }

  public makeArray() {
    for (const entry of this.bodegas) {
      const x: number = entry['id'];
      this.fullbodegas.push(x);
    }
  }
  public next(bod: number) {
    this._ss.setFlow(2);
    this._bs.getInfoBodega(this.selected);
    this._bs.bodega = this.selected;
    this._bs.setProcess(this.selected, this._ss.getCurrentUser().id)
    .subscribe(result => console.log(result)
    );
    this.router.navigate(['/home2', this.selected]);
  }

}
