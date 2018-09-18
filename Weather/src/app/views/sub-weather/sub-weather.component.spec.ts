import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubWeatherComponent } from './sub-weather.component';

describe('SubWeatherComponent', () => {
  let component: SubWeatherComponent;
  let fixture: ComponentFixture<SubWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
