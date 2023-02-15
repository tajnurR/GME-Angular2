import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddDesigComponent } from './emp-add-desig.component';

describe('EmpAddDesigComponent', () => {
  let component: EmpAddDesigComponent;
  let fixture: ComponentFixture<EmpAddDesigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAddDesigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAddDesigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
