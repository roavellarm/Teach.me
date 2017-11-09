import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSubcategoryComponent } from './index-subcategory.component';

describe('IndexSubcategoryComponent', () => {
  let component: IndexSubcategoryComponent;
  let fixture: ComponentFixture<IndexSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
