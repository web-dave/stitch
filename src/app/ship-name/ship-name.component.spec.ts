import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipNameComponent } from './ship-name.component';

describe('ShipNameComponent', () => {
  let component: ShipNameComponent;
  let fixture: ComponentFixture<ShipNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
