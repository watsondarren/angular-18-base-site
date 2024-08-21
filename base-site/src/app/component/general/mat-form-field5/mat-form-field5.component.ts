import { Component } from '@angular/core';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-form-field5',
  standalone: true,
  imports: [MatLabel, MatFormFieldModule, MatInputModule],
  templateUrl: './mat-form-field5.component.html',
  styleUrl: './mat-form-field5.component.css'
})
export class MatFormField5Component {

}
