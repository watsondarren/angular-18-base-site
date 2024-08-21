import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mat-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './mat-spinner.component.html',
  styleUrl: './mat-spinner.component.css'
})
export class MatSpinnerComponent {

}
