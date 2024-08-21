import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField4Component } from './mat-form-field4.component';

describe('MatFormField4Component', () => {
  let component: MatFormField4Component;
  let fixture: ComponentFixture<MatFormField4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
