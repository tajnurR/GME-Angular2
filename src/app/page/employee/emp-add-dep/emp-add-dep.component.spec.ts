import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddDepComponent } from './emp-add-dep.component';

describe('EmpAddDepComponent', () => {
  let component: EmpAddDepComponent;
  let fixture: ComponentFixture<EmpAddDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddDepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
