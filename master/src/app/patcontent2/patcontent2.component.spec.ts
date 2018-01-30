import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Patcontent2Component } from './patcontent2.component';

describe('Patcontent2Component', () => {
  let component: Patcontent2Component;
  let fixture: ComponentFixture<Patcontent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Patcontent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Patcontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
