import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardHeaderComponent } from './shopping-card-header.component';

describe('ShoppingCardHeaderComponent', () => {
  let component: ShoppingCardHeaderComponent;
  let fixture: ComponentFixture<ShoppingCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
