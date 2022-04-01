import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvHeaderComponent } from './iv-header.component';

describe('IvHeaderComponent', () => {
  let component: IvHeaderComponent;
  let fixture: ComponentFixture<IvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
