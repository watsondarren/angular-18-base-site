import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckbox2Component } from './mat-checkbox2.component';

describe('MatCheckbox2Component', () => {
  let component: MatCheckbox2Component;
  let fixture: ComponentFixture<MatCheckbox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCheckbox2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCheckbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
