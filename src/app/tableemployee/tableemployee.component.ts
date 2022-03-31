import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableemployeeDataSource, TableemployeeItem } from './tableemployee-datasource';

@Component({
  selector: 'app-tableemployee',
  templateUrl: './tableemployee.component.html',
  styleUrls: ['./tableemployee.component.scss']
})
export class TableemployeeComponent implements AfterViewInit, OnInit {
  display = "none";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableemployeeItem>;
  dataSource: TableemployeeDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nom', 'prenom','email','occupation','grade','actions'];

  ngOnInit() {
    this.dataSource = new TableemployeeDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}

  
