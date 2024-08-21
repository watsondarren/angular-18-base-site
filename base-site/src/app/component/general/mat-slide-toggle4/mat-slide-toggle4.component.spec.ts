import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlideToggle4Component } from './mat-slide-toggle4.component';

describe('MatSlideToggle4Component', () => {
  let component: MatSlideToggle4Component;
  let fixture: ComponentFixture<MatSlideToggle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSlideToggle4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlideToggle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
