import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionRequisitionComponent } from './production-requisition.component';

describe('ProductionRequisitionComponent', () => {
  let component: ProductionRequisitionComponent;
  let fixture: ComponentFixture<ProductionRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionRequisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
