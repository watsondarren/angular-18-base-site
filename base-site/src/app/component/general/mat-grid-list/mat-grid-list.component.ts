import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-mat-grid-list',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './mat-grid-list.component.html',
  styleUrl: './mat-grid-list.component.css'
})
export class MatGridListComponent {

}
