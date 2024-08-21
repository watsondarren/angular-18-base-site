import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-mat-nav-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './mat-nav-list.component.html',
  styleUrl: './mat-nav-list.component.css'
})
export class MatNavListComponent {

}
