import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mat-button-toggle',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './mat-button-toggle.component.html',
  styleUrl: './mat-button-toggle.component.css'
})
export class MatButtonToggleComponent {

}
