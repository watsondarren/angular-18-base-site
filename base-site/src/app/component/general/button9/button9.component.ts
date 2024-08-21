import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button9',
  standalone: true,
  imports: [],
  templateUrl: './button9.component.html',
  styleUrl: './button9.component.css'
})
export class Button9Component {
  private _snackBar = inject(MatSnackBar);

  openSnackbar() {
    this._snackBar.open('Hello there');
  }

}
