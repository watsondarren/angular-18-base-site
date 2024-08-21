import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-mat-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './mat-paginator.component.html',
  styleUrl: './mat-paginator.component.css'
})
export class MatPaginatorComponent {

}
