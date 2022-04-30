import { genreType } from '../types/index';

const { SELECT_GENRE } = genreType;

export default {
  selectGenre: (Id) => ({
    type: SELECT_GENRE,
    payload: Id,
  }),
};
