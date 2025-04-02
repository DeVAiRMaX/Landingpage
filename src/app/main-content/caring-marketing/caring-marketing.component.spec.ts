import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaringMarketingComponent } from './caring-marketing.component';

describe('CaringMarketingComponent', () => {
  let component: CaringMarketingComponent;
  let fixture: ComponentFixture<CaringMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaringMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaringMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
