import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableemployeeItem {
  nom: string;
  prenom: string;
  occupation: string;
  grade: string;
  email: string ;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableemployeeItem[] = [
  {id: 1, nom: 'foulen',prenom:'sayed',occupation:' depatement rh ',grade:'metrasem',email:'foulenbenfoulen@gmail.com'},
  {id: 2, nom: 'foulen',prenom:'sayed',occupation:' depatement rh ',grade:'metrasem',email:'foulenbenfoulen@gmail.com'},
  {id: 3, nom: 'foulen',prenom:'sayed',occupation:' depatement rh ',grade:'metrasem',email:'foulenbenfoulen@gmail.com'},
  {id: 4, nom: 'foulen',prenom:'sayed',occupation:' depatement rh ',grade:'metrasem',email:'foulenbenfoulen@gmail.com'},

];

/**
 * Data source for the Tableemployee view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableemployeeDataSource extends DataSource<TableemployeeItem> {
  data: TableemployeeItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableemployeeItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableemployeeItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableemployeeItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.nom, b.nom, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'lastname': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
