import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckbox5Component } from './mat-checkbox5.component';

describe('MatCheckbox5Component', () => {
  let component: MatCheckbox5Component;
  let fixture: ComponentFixture<MatCheckbox5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCheckbox5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCheckbox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
