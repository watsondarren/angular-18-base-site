import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonToggleGroupComponent } from './mat-button-toggle-group.component';

describe('MatButtonToggleGroupComponent', () => {
  let component: MatButtonToggleGroupComponent;
  let fixture: ComponentFixture<MatButtonToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonToggleGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatButtonToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
