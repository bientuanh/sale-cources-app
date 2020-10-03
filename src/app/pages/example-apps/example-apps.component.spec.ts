import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAppsComponent } from './example-apps.component';

describe('ExampleAppsComponent', () => {
  let component: ExampleAppsComponent;
  let fixture: ComponentFixture<ExampleAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
