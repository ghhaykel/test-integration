import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfosComponent } from './employee-infos.component';

describe('EmployeeInfosComponent', () => {
  let component: EmployeeInfosComponent;
  let fixture: ComponentFixture<EmployeeInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
