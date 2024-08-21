import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button12Component } from './button12.component';

describe('Button12Component', () => {
  let component: Button12Component;
  let fixture: ComponentFixture<Button12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
