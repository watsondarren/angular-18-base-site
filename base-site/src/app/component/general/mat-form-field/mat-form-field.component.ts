import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-form-field',
  standalone: true,
  imports: [MatAutocompleteModule, MatLabel, MatFormFieldModule, MatInputModule],
  templateUrl: './mat-form-field.component.html',
  styleUrl: './mat-form-field.component.css'
})
export class MatFormFieldComponent {

}
