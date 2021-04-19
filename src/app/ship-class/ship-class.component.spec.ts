import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipClassComponent } from './ship-class.component';

describe('ShipClassComponent', () => {
  let component: ShipClassComponent;
  let fixture: ComponentFixture<ShipClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
