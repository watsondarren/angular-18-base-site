import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabGroupComponent } from './mat-tab-group.component';

describe('MatTabGroupComponent', () => {
  let component: MatTabGroupComponent;
  let fixture: ComponentFixture<MatTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
