import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmplyeeComponent } from './view-emplyee.component';

describe('ViewEmplyeeComponent', () => {
  let component: ViewEmplyeeComponent;
  let fixture: ComponentFixture<ViewEmplyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmplyeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
