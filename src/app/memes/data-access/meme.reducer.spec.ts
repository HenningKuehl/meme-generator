import { memeReducer, initialState } from './meme.reducer';

describe('Meme Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = memeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
