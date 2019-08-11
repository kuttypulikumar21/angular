import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocomponenttwoComponent } from './democomponenttwo.component';

describe('DemocomponenttwoComponent', () => {
  let component: DemocomponenttwoComponent;
  let fixture: ComponentFixture<DemocomponenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocomponenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocomponenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
