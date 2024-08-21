import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-mat-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './mat-list.component.html',
  styleUrl: './mat-list.component.css'
})
export class MatListComponent {

}
