import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductItemComponent } from './popular-product-item.component';

describe('PopularProductItemComponent', () => {
  let component: PopularProductItemComponent;
  let fixture: ComponentFixture<PopularProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
