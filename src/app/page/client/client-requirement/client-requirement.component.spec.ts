import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRequirementComponent } from './client-requirement.component';

describe('ClientRequirementComponent', () => {
  let component: ClientRequirementComponent;
  let fixture: ComponentFixture<ClientRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
