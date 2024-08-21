import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipSetComponent } from './mat-chip-set.component';

describe('MatChipSetComponent', () => {
  let component: MatChipSetComponent;
  let fixture: ComponentFixture<MatChipSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatChipSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatChipSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
