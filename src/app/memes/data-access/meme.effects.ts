import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as MemeActions from './meme.actions';


@Injectable()
export class MemeEffects {

  loadMemes$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MemeActions.loadMemes),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => MemeActions.loadMemesSuccess({ data })),
          catchError(error => of(MemeActions.loadMemesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
