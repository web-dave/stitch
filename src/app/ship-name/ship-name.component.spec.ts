import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ShipNameComponent } from './ship-name.component';

fdescribe('ShipNameComponent', () => {
  fdescribe('ShipNameComponent', () => {
    let spectator: Spectator<ShipNameComponent>;
    const createComponent = createComponentFactory(ShipNameComponent);
    const ship: any = { name: 'falcon' };
    beforeEach(() => {
      spectator = createComponent();
    });

    it('should have a title', () => {
      spectator.setInput('data', ship);
      expect(spectator.query('h4')).toHaveText('FALCON');
    });
  });
});
