import { Component, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TestEntryComponent } from '../../../app.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet() {
    this._bottomSheet.open(TestEntryComponent);
  }

}
