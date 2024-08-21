import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button10Component } from './button10.component';

describe('Button10Component', () => {
  let component: Button10Component;
  let fixture: ComponentFixture<Button10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
