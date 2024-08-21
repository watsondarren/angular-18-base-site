import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNavListComponent } from './mat-nav-list.component';

describe('MatNavListComponent', () => {
  let component: MatNavListComponent;
  let fixture: ComponentFixture<MatNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatNavListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
