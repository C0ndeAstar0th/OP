import { Component, OnInit, Input} from '@angular/core';
import { BaseService } from '../../../../../services/base.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Bod } from '../../../../models/tableBod';
import { TablesService } from '../../../../../services/tables.service';

@Component({
  selector: 'app-payertable',
  templateUrl: './payertable.component.html',
  styleUrls: ['./payertable.component.css']
})
export class PayertableComponent implements OnInit {
  public dataSource: BodDataSource;
  public displayedColumns = ['id', 'user_id', 'done', 'payed'];
  @Input() selected: number;
  @Input() link: boolean;

  constructor(private _ts: TablesService
  ) {
    this.dataSource = new BodDataSource(this._ts);

    console.log(this.dataSource);
  }

  ngOnInit() {
  }

}

export class BodDataSource extends DataSource<any> {
  constructor(private _ts: TablesService) {
    super();
  }
  connect(): Observable<Bod[]> {
    console.log('esto se ejecuta');
    return this._ts.getStatus(1);
  }
  disconnect() { }
}
