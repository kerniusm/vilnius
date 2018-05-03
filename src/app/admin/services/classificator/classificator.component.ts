import { Component, OnInit } from '@angular/core';


import { ClassificatorService } from './classificator.service';
import { ClassificatorData } from './classificator';
import {MatTableDataSource} from '@angular/material';
import {NotificationsComponent} from '../../../core/notifications/notifications.component';

@Component({
  selector: 'app-classificator',
  templateUrl: './classificator.component.html',
  styleUrls: ['./classificator.component.scss']
})
export class ClassificatorComponent implements OnInit {
  classificator_data: object;
  newClassificator: boolean;

  selectedRowIndex: number = -1;


  articile_code: number;
  articile_title: string;
  group_code: number;
  service_group: string;
  service_code: number;
  service_title: string;

  displayedColumns = ['articile_code', 'articile_title', 'group_code', 'service_group', 'service_code',  'service_title', 'id'];
  displayedColumnNew = ['articile_code', 'articile_title', 'group_code', 'service_group', 'service_code',  'service_title', 'id'];

  classificatordata: any;
  dataSource: any;

  dataSourceBlank = [{
    articile_code: this.articile_code,
    articile_title: this.articile_title,
    group_code: this.group_code,
    service_group: this.service_group,
    service_code: this.service_code,
    service_title: this.service_title
  }]

  constructor(
    private _cS: ClassificatorService,
    public _nF: NotificationsComponent
  ) {
    this._cS.showClassificators().subscribe(
      classificator => this.dataSource = new MatTableDataSource(classificator)
    );
   }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editClassificatorToogle(row) {
    this.selectedRowIndex = row.id;

    this.articile_code = row.articile_code;
    this.articile_title = row.articile_title;
    this.group_code = row.group_code;
    this.service_group = row.service_group;
    this.service_code = row.service_code;
    this.service_title = row.service_title;

    return row.editable = row.editable ? false : true;
  }

  editClassificator(row) {
    const data = {
      articile_code: this.articile_code,
      articile_title: this.articile_title,
      group_code: this.group_code,
      service_group: this.service_group,
      service_code: this.service_code,
      service_title: this.service_title
    };
    return this._cS.editClassificator(row.id, data).then(
      response => {
        this.selectedRowIndex = 0;
        this._nF.openSnackBar("testas");
      }
    );

  }
  createClassificator() {
     const new_data = {
      articile_code: this.articile_code,
      articile_title: this.articile_title,
      group_code: this.group_code,
      service_group: this.service_group,
      service_code: this.service_code,
      service_title: this.service_title
    };
    this._cS.addClassificator(new_data);
  }
  addClassificatorToggle() {
    this.newClassificator = this.newClassificator ? false : true;
  };
}
