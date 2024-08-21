import { Component } from '@angular/core';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-form-field4',
  standalone: true,
  imports: [MatLabel, MatFormFieldModule, MatInputModule],
  templateUrl: './mat-form-field4.component.html',
  styleUrl: './mat-form-field4.component.css'
})
export class MatFormField4Component {

}
