import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymaterialcomponentComponent } from './mymaterialcomponent.component';

describe('MymaterialcomponentComponent', () => {
  let component: MymaterialcomponentComponent;
  let fixture: ComponentFixture<MymaterialcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymaterialcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymaterialcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
