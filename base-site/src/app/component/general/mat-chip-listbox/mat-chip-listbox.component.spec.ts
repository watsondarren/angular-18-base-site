import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipListboxComponent } from './mat-chip-listbox.component';

describe('MatChipListboxComponent', () => {
  let component: MatChipListboxComponent;
  let fixture: ComponentFixture<MatChipListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatChipListboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatChipListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
