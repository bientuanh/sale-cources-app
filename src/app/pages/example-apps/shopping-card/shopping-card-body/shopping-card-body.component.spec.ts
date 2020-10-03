import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardBodyComponent } from './shopping-card-body.component';

describe('ShoppingCardBodyComponent', () => {
  let component: ShoppingCardBodyComponent;
  let fixture: ComponentFixture<ShoppingCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
