import { GENRES } from '../../constants/index';
import { genreType } from '../types/index';

const { SELECT_GENRE } = genreType;

const initialState = {
  genres: GENRES,
  selectedGenre: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE: {
      const indexGenre = state.genres.findIndex(
        (genre) => genre.Id === action.payload
      );
      if (indexGenre === -1) return state;
      return {
        ...state,
        selectedGenre: state.genres[indexGenre],
      };
    }
    default:
      return state;
  }
};
