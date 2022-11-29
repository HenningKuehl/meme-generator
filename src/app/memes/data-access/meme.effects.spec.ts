import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MemeEffects } from './meme.effects';

describe('MemeEffects', () => {
  let actions$: Observable<any>;
  let effects: MemeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MemeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MemeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
