import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselBrandComponent } from './caroussel-brand.component';

describe('CarousselBrandComponent', () => {
  let component: CarousselBrandComponent;
  let fixture: ComponentFixture<CarousselBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousselBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
