import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpvProfileComponent } from './ipv-profile.component';

describe('IpvProfileComponent', () => {
  let component: IpvProfileComponent;
  let fixture: ComponentFixture<IpvProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpvProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpvProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
