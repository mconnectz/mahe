import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatcontentComponent } from './patcontent.component';

describe('PatcontentComponent', () => {
  let component: PatcontentComponent;
  let fixture: ComponentFixture<PatcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
