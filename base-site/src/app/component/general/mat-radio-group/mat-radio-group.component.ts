import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-mat-radio-group',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './mat-radio-group.component.html',
  styleUrl: './mat-radio-group.component.css'
})
export class MatRadioGroupComponent {

}
