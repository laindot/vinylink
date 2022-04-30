import { productType } from '../types';

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productType;

export default {
  selectAlbum: (albumId) => ({
    type: SELECT_PRODUCT,
    payload: albumId,
  }),

  filteredAlbums: (Id) => ({
    type: FILTERED_PRODUCTS,
    payload: Id,
  }),
};
