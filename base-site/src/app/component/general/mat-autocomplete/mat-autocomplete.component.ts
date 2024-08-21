import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-mat-autocomplete',
  standalone: true,
  imports: [MatAutocompleteModule],
  templateUrl: './mat-autocomplete.component.html',
  styleUrl: './mat-autocomplete.component.css'
})
export class MatAutocompleteComponent {

}
