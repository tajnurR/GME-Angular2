import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepSalDegComponent } from './list-dep-sal-deg.component';

describe('ListDepSalDegComponent', () => {
  let component: ListDepSalDegComponent;
  let fixture: ComponentFixture<ListDepSalDegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepSalDegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDepSalDegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
