import {createReducer, on} from '@ngrx/store';
import * as MemeActions from './meme.actions';
import {ImgflipMeme} from "./models/imgflip-meme";

export const memeFeatureKey = 'meme';

export interface State {
  memes: ImgflipMeme[];
  status: 'pending' | 'loading' | 'success' | 'error';
  error: any | null;
}

export const initialState: State = {
  memes: [],
  status: 'pending',
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(MemeActions.loadMemes, state => ({...state, status: 'loading'})),
  on(MemeActions.loadMemesSuccess, (state, {memes}) => ({...state, status: 'success', memes})),
  on(MemeActions.loadMemesFailure, (state, {error}) => ({...state, status: 'error', error})),
);
