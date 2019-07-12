import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajeComponent } from './trabaje.component';

describe('TrabajeComponent', () => {
  let component: TrabajeComponent;
  let fixture: ComponentFixture<TrabajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
