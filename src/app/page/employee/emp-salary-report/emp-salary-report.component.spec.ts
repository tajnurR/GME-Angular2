import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalaryReportComponent } from './emp-salary-report.component';

describe('EmpSalaryReportComponent', () => {
  let component: EmpSalaryReportComponent;
  let fixture: ComponentFixture<EmpSalaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSalaryReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSalaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
