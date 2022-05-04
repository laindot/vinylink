import { GENRES } from '../../constants/index';
import { genreType } from '../types/index';

const { SELECT_GENRE, RESET_STATE } = genreType;

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
    case RESET_STATE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    default:
      return state;
  }
};
