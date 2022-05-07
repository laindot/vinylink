import { PRODUCTS } from '../../constants/index';
import { productType } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productType;

const initialState = {
  listings: PRODUCTS,
  filteredListings: [],
  selectedProduct: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.listings.find(
          (listing) => listing.Id === action.payload
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
