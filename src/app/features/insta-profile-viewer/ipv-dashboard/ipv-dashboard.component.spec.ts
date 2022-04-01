import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpvDashboardComponent } from './ipv-dashboard.component';

describe('IpvDashboardComponent', () => {
  let component: IpvDashboardComponent;
  let fixture: ComponentFixture<IpvDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpvDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
