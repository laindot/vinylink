import { productType } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productType;

export default {
  selectProduct: (productId) => ({
    type: SELECT_PRODUCT,
    payload: productId,
  }),

  filterProducts: (Id) => ({
    type: FILTER_PRODUCTS,
    payload: Id,
  }),
};
