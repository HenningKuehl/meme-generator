import {AppState} from "../../shared/data-access/app.state";
import {createSelector} from "@ngrx/store";

export const selectMemeState = (state: AppState) => state.meme;

export const selectMemes = createSelector(selectMemeState, state => state.memes.filter(m => m.box_count == 2));
export const selectStatus = createSelector(selectMemeState, state => state.status);
