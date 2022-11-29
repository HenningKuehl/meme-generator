import { Action, createReducer, on } from '@ngrx/store';
import * as MemeActions from './meme.actions';

export const memeFeatureKey = 'meme';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(MemeActions.loadMemes, state => state),
  on(MemeActions.loadMemesSuccess, (state, action) => state),
  on(MemeActions.loadMemesFailure, (state, action) => state),

);
