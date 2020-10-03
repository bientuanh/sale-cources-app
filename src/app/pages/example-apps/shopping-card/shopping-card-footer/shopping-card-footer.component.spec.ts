import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardFooterComponent } from './shopping-card-footer.component';

describe('ShoppingCardFooterComponent', () => {
  let component: ShoppingCardFooterComponent;
  let fixture: ComponentFixture<ShoppingCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
