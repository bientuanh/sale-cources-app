import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJobComponent } from './main-job.component';

describe('MainJobComponent', () => {
  let component: MainJobComponent;
  let fixture: ComponentFixture<MainJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
