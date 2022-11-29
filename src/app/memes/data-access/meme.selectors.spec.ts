import * as fromMeme from './meme.reducer';
import { selectMemeState } from './meme.selectors';

describe('Meme Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMemeState({
      [fromMeme.memeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
