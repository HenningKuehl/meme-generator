import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMeme from './meme.reducer';

export const selectMemeState = createFeatureSelector<fromMeme.State>(
  fromMeme.memeFeatureKey
);

export const selectMemes = createSelector(selectMemeState, state => state.memes);
export const selectStatus = createSelector(selectMemeState, state => state.status);
