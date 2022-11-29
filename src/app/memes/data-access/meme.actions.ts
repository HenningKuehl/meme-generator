import { createAction, props } from '@ngrx/store';
import {ImgflipMeme} from "./models/imgflip-meme";

export const loadMemes = createAction(
  '[Meme] Load Memes'
);

export const loadMemesSuccess = createAction(
  '[Meme] Load Memes Success',
  props<{ memes: ImgflipMeme[] }>()
);

export const loadMemesFailure = createAction(
  '[Meme] Load Memes Failure',
  props<{ error: any }>()
);
