import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDashboardComponent } from './production-dashboard.component';

describe('ProductionDashboardComponent', () => {
  let component: ProductionDashboardComponent;
  let fixture: ComponentFixture<ProductionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
