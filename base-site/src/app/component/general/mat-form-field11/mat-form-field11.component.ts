import { Component } from '@angular/core';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-form-field11',
  standalone: true,
  imports: [MatLabel, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './mat-form-field11.component.html',
  styleUrl: './mat-form-field11.component.css'
})
export class MatFormField11Component {

}
