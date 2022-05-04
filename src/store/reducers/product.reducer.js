import { PRODUCTS } from '../../constants/index';
import { productType } from '../types';

const { SELECT_ALBUM, FILTER_PRODUCTS } = productType;

const initialState = {
  listings: PRODUCTS,
  filteredListings: [],
  selectedAlbum: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ALBUM:
      return {
        ...state,
        selectedAlbum: state.albums.find(
          (album) => album.Id === action.albumId
        ),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredListings: state.listings.filter(
          (listing) => listing.genre === action.payload
        ),
      };
    default:
      return state;
  }
};
