import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField15Component } from './mat-form-field15.component';

describe('MatFormField15Component', () => {
  let component: MatFormField15Component;
  let fixture: ComponentFixture<MatFormField15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
