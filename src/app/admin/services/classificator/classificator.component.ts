import { Component, OnInit } from '@angular/core';


import { ClassificatorService } from './classificator.service';
import { ClassificatorData } from './classificator';


@Component({
  selector: 'app-classificator',
  templateUrl: './classificator.component.html',
  styleUrls: ['./classificator.component.scss']
})
export class ClassificatorComponent implements OnInit {

  articile_code: number;
  articile_title: string;
  group_code: number;
  service_group: string;
  service_code: number;
  service_title: string;

  displayedColumns = ['id', 'articile_code', 'articile_title', 'group_code', 'service_code', 'service_group', 'service_title'];

  dataSource: any;

  constructor(private _cS: ClassificatorService) {
    this._cS.showClassificators().subscribe(
      classificator => this.dataSource = classificator
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
    this.articile_code = row.articile_code;
    this.articile_title = row.articile_title;
    this.group_code = row.group_code;
    this.service_group = row.service_group;
    this.service_code = row.service_code;
    this.service_title = row.service_title;

    return row.editable = row.editable ? false : true;
  }

  editClassificator(id) {
    const data = {
      articile_code: this.articile_code,
      articile_title: this.articile_title,
      group_code: this.group_code,
      service_group: this.service_group,
      service_code: this.service_code,
      service_title: this.service_title
    }
    this._cS.editClassificator(id, data);
  }

}
