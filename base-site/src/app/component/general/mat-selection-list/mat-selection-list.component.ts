import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-mat-selection-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './mat-selection-list.component.html',
  styleUrl: './mat-selection-list.component.css'
})
export class MatSelectionListComponent {

}
