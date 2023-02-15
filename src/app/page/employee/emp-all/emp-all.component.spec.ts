import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAllComponent } from './emp-all.component';

describe('EmpAllComponent', () => {
  let component: EmpAllComponent;
  let fixture: ComponentFixture<EmpAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
