import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckbox3Component } from './mat-checkbox3.component';

describe('MatCheckbox3Component', () => {
  let component: MatCheckbox3Component;
  let fixture: ComponentFixture<MatCheckbox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCheckbox3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCheckbox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
