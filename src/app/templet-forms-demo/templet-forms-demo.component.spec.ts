import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletFormsDemoComponent } from './templet-forms-demo.component';

describe('TempletFormsDemoComponent', () => {
  let component: TempletFormsDemoComponent;
  let fixture: ComponentFixture<TempletFormsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletFormsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletFormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
