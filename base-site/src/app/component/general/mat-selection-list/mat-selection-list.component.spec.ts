import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectionListComponent } from './mat-selection-list.component';

describe('MatSelectionListComponent', () => {
  let component: MatSelectionListComponent;
  let fixture: ComponentFixture<MatSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
