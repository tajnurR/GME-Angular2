import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAttendanceLiveComponent } from './emp-attendance-live.component';

describe('EmpAttendanceLiveComponent', () => {
  let component: EmpAttendanceLiveComponent;
  let fixture: ComponentFixture<EmpAttendanceLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAttendanceLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAttendanceLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
