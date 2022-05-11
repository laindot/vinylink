import Listing from '../../models/listing';
import { listingType } from '../types/index';

const { ADD_LISTING, LOAD_LISTING } = listingType;

const initialState = {
  listings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LISTING:
      const newListing = new Listing(
        action.payload.Id,
        action.payload.title,
        action.payload.picture,
        action.payload.price,
        action.payload.address
      );
      return {
        ...state,
        listings: state.listings.concat(newListing),
      };
    case LOAD_LISTING:
      return {
        ...state,
        listings: action.payload.map(
          (item) =>
            new Listing(
              item.Id,
              item.title,
              item.picture,
              item.price,
              item.address
            )
        ),
      };

    default:
      return state;
  }
};
