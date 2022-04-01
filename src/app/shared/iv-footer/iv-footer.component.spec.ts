import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvFooterComponent } from './iv-footer.component';

describe('IvFooterComponent', () => {
  let component: IvFooterComponent;
  let fixture: ComponentFixture<IvFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
