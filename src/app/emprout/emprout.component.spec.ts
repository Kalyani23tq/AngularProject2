import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmproutComponent } from './emprout.component';

describe('EmproutComponent', () => {
  let component: EmproutComponent;
  let fixture: ComponentFixture<EmproutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmproutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmproutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
