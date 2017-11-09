import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubcategoryComponent } from './form-subcategory.component';

describe('FormSubcategoryComponent', () => {
  let component: FormSubcategoryComponent;
  let fixture: ComponentFixture<FormSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
