import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildroutComponent } from './childrout.component';

describe('ChildroutComponent', () => {
  let component: ChildroutComponent;
  let fixture: ComponentFixture<ChildroutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildroutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
