import { PRODUCTS } from '../../constants/index';
import { productType } from '../types';

const { SELECT_ALBUM, FILTERED_ALBUMS } = productType;

const initialState = {
  albums: PRODUCTS,
  filteredAlbums: [],
  selectedAlbum: null,
};

export default (action, state = initialState) => {
  switch (action.type) {
    case SELECT_ALBUM:
      return {
        ...state,
        selectedAlbum: state.albums.find(
          (album) => album.Id === action.albumId
        ),
      };
    case FILTERED_ALBUMS:
      return {
        ...state,
        filteredAlbums: state.albums.filter(
          (album) => album.genre === action.genreId
        ),
      };
    default:
      return state;
  }
};
