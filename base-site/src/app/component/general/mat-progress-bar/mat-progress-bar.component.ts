import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-mat-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './mat-progress-bar.component.html',
  styleUrl: './mat-progress-bar.component.css'
})
export class MatProgressBarComponent {

}
