import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInOutBtnComponent } from './log-in-out-btn.component';

describe('LogInOutBtnComponent', () => {
  let component: LogInOutBtnComponent;
  let fixture: ComponentFixture<LogInOutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInOutBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInOutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
