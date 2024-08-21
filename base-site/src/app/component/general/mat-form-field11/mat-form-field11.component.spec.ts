import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField11Component } from './mat-form-field11.component';

describe('MatFormField11Component', () => {
  let component: MatFormField11Component;
  let fixture: ComponentFixture<MatFormField11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
