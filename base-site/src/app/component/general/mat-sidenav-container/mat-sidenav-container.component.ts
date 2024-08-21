import { DOCUMENT } from '@angular/common';
import { Component, inject, InjectionToken } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TestEntryComponent } from '../../../app.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export const AUTOMATED_KITCHEN_SINK = new InjectionToken<boolean>('AUTOMATED_KITCHEN_SINK');

@Component({
  selector: 'app-mat-sidenav-container',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './mat-sidenav-container.component.html',
  styleUrl: './mat-sidenav-container.component.css'
})
export class MatSidenavContainerComponent {
  private _bottomSheet = inject(MatBottomSheet);
  isAutomated: boolean;

  constructor() {

    this.isAutomated = inject(AUTOMATED_KITCHEN_SINK, { optional: true }) ?? true;

    // Only open overlays when automation is enabled since they can prevent debugging.
    if (this.isAutomated) {
      inject(DOCUMENT).body.classList.add('test-automated');
      this.openBottomSheet();
    }
  }

  openBottomSheet() {
    this._bottomSheet.open(TestEntryComponent);
  }

}
