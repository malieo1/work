import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablegroupeDataSource, TablegroupeItem } from './tablegroupe-datasource';

@Component({
  selector: 'app-tablegroupe',
  templateUrl: './tablegroupe.component.html',
  styleUrls: ['./tablegroupe.component.scss']
})
export class TablegroupeComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TablegroupeItem>;
  dataSource: TablegroupeDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['group', 'localisation'];

  ngOnInit() {
    this.dataSource = new TablegroupeDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
