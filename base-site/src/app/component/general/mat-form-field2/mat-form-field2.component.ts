import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-form-field2',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
  templateUrl: './mat-form-field2.component.html',
  styleUrl: './mat-form-field2.component.css'
})
export class MatFormField2Component {

}
