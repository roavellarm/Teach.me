import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInstructorComponent } from './index-instructor.component';

describe('IndexInstructorComponent', () => {
  let component: IndexInstructorComponent;
  let fixture: ComponentFixture<IndexInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
