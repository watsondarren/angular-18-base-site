import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestEntryComponent } from '../../../app.component';

@Component({
  selector: 'app-button7',
  standalone: true,
  imports: [],
  templateUrl: './button7.component.html',
  styleUrl: './button7.component.css'
})
export class Button7Component {
  private _dialog = inject(MatDialog);

  openDialog() {
    this._dialog.open(TestEntryComponent);
  }

}
