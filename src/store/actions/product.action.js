import { productType } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productType;

export default {
  selectAlbum: (albumId) => ({
    type: SELECT_PRODUCT,
    payload: albumId,
  }),

  filterProducts: (Id) => ({
    type: FILTER_PRODUCTS,
    payload: Id,
  }),
};
