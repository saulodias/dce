import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DneFormComponent } from './dne-form.component';

describe('DneFormComponent', () => {
  let component: DneFormComponent;
  let fixture: ComponentFixture<DneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
