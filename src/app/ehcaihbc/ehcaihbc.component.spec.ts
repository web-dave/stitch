import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhcaihbcComponent } from './ehcaihbc.component';

describe('EhcaihbcComponent', () => {
  let component: EhcaihbcComponent;
  let fixture: ComponentFixture<EhcaihbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhcaihbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhcaihbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
