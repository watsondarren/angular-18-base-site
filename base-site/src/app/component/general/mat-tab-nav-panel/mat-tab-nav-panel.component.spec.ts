import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabNavPanelComponent } from './mat-tab-nav-panel.component';

describe('MatTabNavPanelComponent', () => {
  let component: MatTabNavPanelComponent;
  let fixture: ComponentFixture<MatTabNavPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabNavPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTabNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
