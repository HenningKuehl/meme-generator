import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as MemeActions from './meme.actions';
import {MemeService} from "./meme.service";


@Injectable()
export class MemeEffects {

  loadMemes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MemeActions.loadMemes),
      concatMap(() =>
        this.memeService.getMemes().pipe(
          map(res => MemeActions.loadMemesSuccess({ memes: res.data.memes })),
          catchError(error => of(MemeActions.loadMemesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private memeService: MemeService) {}
}
