import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyServiceComponent } from './add-my-service.component';

describe('AddMyServiceComponent', () => {
  let component: AddMyServiceComponent;
  let fixture: ComponentFixture<AddMyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
