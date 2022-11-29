import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMeme from './meme.reducer';

export const selectMemeState = createFeatureSelector<fromMeme.State>(
  fromMeme.memeFeatureKey
);
