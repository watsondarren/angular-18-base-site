import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-mat-toolbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './mat-toolbar.component.html',
  styleUrl: './mat-toolbar.component.css'
})
export class MatToolbarComponent {

}
