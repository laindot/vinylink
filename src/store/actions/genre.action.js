import { genreType } from '../types/index';

const { SELECT_GENRE, RESET_STATE } = genreType;

export default {
  selectGenre: (Id) => ({
    type: SELECT_GENRE,
    payload: Id,
  }),
  resetState: () => ({
    type: RESET_STATE,
    payload: null,
  }),
};
