import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellingComponent } from './add-selling.component';

describe('AddSellingComponent', () => {
  let component: AddSellingComponent;
  let fixture: ComponentFixture<AddSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
