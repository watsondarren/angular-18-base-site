import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckbox4Component } from './mat-checkbox4.component';

describe('MatCheckbox4Component', () => {
  let component: MatCheckbox4Component;
  let fixture: ComponentFixture<MatCheckbox4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCheckbox4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCheckbox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
