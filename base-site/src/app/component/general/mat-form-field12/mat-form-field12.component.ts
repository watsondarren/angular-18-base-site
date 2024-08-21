import { Component } from '@angular/core';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-mat-form-field12',
  standalone: true,
  imports: [MatLabel, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './mat-form-field12.component.html',
  styleUrl: './mat-form-field12.component.css'
})
export class MatFormField12Component {

}
