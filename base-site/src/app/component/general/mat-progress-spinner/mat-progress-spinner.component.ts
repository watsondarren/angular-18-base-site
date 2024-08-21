import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mat-progress-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './mat-progress-spinner.component.html',
  styleUrl: './mat-progress-spinner.component.css'
})
export class MatProgressSpinnerComponent {

}
