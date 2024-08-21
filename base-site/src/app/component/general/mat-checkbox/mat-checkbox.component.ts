import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-mat-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './mat-checkbox.component.html',
  styleUrl: './mat-checkbox.component.css'
})
export class MatCheckboxComponent {

}
