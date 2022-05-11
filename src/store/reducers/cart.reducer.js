// import {CART} from '../../constants/cart';
import { cartType } from '../types';

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartType;

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = (list) =>
  list
    .map((item) => item.quantity * item.price)
    .reduce((acc, curr) => acc + curr, 0);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const indexItem = state.items.findIndex(
        (item) => item.Id === action.item.Id
      );
      if (indexItem === -1) {
        const item = { ...action.item, quantity: 1 };
        const updatedCart = [...state.items, item];
        return {
          ...state,
          items: updatedCart,
          total: sumTotal(updatedCart),
        };
      }

      const items = [...state.items].map((item) => {
        if (item.Id === action.item.Id) item.quantity++;
        return item;
      });

      return {
        ...state,
        items,
        total: sumTotal(items),
      };

    case REMOVE_ITEM:
      const cleanCart = [...state.items].filter(
        (item) => item.Id !== action.Id
      );
      return {
        ...state,
        items: cleanCart,
        total: sumTotal(cleanCart),
      };
    case CONFIRM_CART:
      return {
        ...state,
        items: [],
        total: 0,
      };
    default:
      return state;
  }
};
