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
  public displayedColumns = ['id', 'user_id', 'done', 'payed', 'link'];
  public dataSource;
  public selectColumn;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() selected: number;
  @Input() link: boolean;

  constructor(private _bs: BaseService,
              private router: Router,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('pdfb', sanitizer
    .bypassSecurityTrustResourceUrl('assets/icons/pdfb.svg'));
  }

  ngOnInit() {
    this.selection(this.selected);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.bodegas);
    }, 500);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }, 500);

  }

  public selection(numb: number) {
    if (this.selected === 3) {
      numb = 2;
    }
    this._bs.getStatus(numb).subscribe(
      result => {
        this.bodegas = result;
        this.makeArray();
      });
  }


  public makeArray() {

    for (const entry of this.bodegas) {
      if (this.selected  === 0) {
        entry.done = 'Sin peritar';
        entry.payed = 'NO';
        entry.user_id = 'N/A';
      } else {
        this._bs.getUsers(entry.user_id)
          .subscribe(r => {
            entry.user_id = r[0]['name'] + ' ' + r[0]['surname'];

              if (this.selected === 1) {
                entry.done = 'En proceso';
                entry.payed = 'NO';
              } else if (this.selected === 2) {
               entry.done = 'Peritada';
                entry.link = true;
                entry.payed = 'NO';
              } else if (this.selected === 3) {
                entry.done = 'Peritada y Pagada';
                entry.payed = 'SI';
                entry.link = true;
              }
            }
          );
      }
    }
  }
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


