import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BaseService } from '../../../../../services/base.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSort, Sort } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Bod } from '../../../../models/tableBod';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-payertable',
  templateUrl: './payertable.component.html',
  styleUrls: ['./payertable.component.css']
})
export class PayertableComponent implements OnInit {
  public bodegas: any[];
  public displayedColumns: any[];
  public dataSource;
  public selectColumn;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() selected: number;

  constructor(private _bs: BaseService,
              private router: Router,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('pdfb', sanitizer
    .bypassSecurityTrustResourceUrl('assets/icons/pdfb.svg'));
  }

  ngOnInit() {
    if (this.selected === 2 || this.selected === 3) {
      this.displayedColumns = ['id', 'user_id', 'done', 'payed', 'link'];
    } else {
      this.displayedColumns = ['id', 'user_id', 'done', 'payed'];
    }
    this.selection(this.selected);
  }

  public selection(numb: number) {
    if (numb === 3) {
      this._bs.getStatus(2)
        .subscribe(result => {
         if (result['payed'] === 'SI') {
           this.bodegas = result;
           this.makeArray();
         } else {
           this.bodegas = [0, 0 , 0 , 0 , 0];
         }
        }
        );
    } else {
    this._bs.getStatus(numb)
    .subscribe(result => {
        this.bodegas = result;
        this.makeArray();
      }
    );
    }
  }


  public makeArray() {

    for (const entry of this.bodegas) {
      if (this.selected  !== 0) {
        this._bs.getUsers(entry.user_id)
          .subscribe(r => {
            entry.user_id = r[0]['name'] + ' ' + r[0]['surname'];
              }
          );
      }
    }
    this.printInfo();
  }

  public printInfo() {
      this.dataSource = new MatTableDataSource(this.bodegas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public rowClicked(row: any): void {
    console.log(row);
  }
}


