import { Component } from '@angular/core';
import { CdkTableModule, DataSource } from '@angular/cdk/table';
import { Observable, of as observableOf } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

export class TableDataSource extends DataSource<any> {
  connect(): Observable<any> {
    return observableOf([
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ]);
  }

  disconnect() { }
}

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.css'
})
export class Table2Component {

  /** List of columns for the CDK and Material table. */
  tableColumns = ['position', 'name', 'weight', 'symbol'];

  /** Data source for the CDK and Material table. */
  tableDataSource = new TableDataSource();

  /** Data used to render a virtual scrolling list. */
  virtualScrollData = Array(10000).fill(50);

}
