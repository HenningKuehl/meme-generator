import { createAction, props } from '@ngrx/store';

export const loadMemes = createAction(
  '[Meme] Load Memes'
);

export const loadMemesSuccess = createAction(
  '[Meme] Load Memes Success',
  props<{ data: any }>()
);

export const loadMemesFailure = createAction(
  '[Meme] Load Memes Failure',
  props<{ error: any }>()
);
