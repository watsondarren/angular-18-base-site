import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlideToggleComponent } from './mat-slide-toggle.component';

describe('MatSlideToggleComponent', () => {
  let component: MatSlideToggleComponent;
  let fixture: ComponentFixture<MatSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSlideToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
