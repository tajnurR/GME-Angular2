import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddGradeComponent } from './emp-add-grade.component';

describe('EmpAddGradeComponent', () => {
  let component: EmpAddGradeComponent;
  let fixture: ComponentFixture<EmpAddGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
