import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../../services/base.service';
import { StorageService } from '../../../../services/storage.service';
import { Router } from '@angular/router';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-firstpayer',
  templateUrl: './firstpayer.component.html',
  styleUrls: ['./firstpayer.component.css']
})
export class FirstpayerComponent implements OnInit {
public tab = 0;
  constructor() {}

  ngOnInit() {}
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
    this.tab = tabChangeEvent.index;
  }

}
