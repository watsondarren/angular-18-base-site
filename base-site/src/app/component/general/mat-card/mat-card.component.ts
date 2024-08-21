import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mat-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './mat-card.component.html',
  styleUrl: './mat-card.component.css'
})
export class MatCardComponent {

}
