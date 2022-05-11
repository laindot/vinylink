import { URL_API } from '../../utils/api';
import { cartType } from '../types';

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartType;

export default {
  addItem: (item) => ({
    type: ADD_ITEM,
    item,
  }),

  removeItem: (Id) => ({
    type: REMOVE_ITEM,
    Id,
  }),

  confirmCart: (cart, total, user) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL_API}/order.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ date: Date.now(), items: cart, total, user }),
        });

        const result = await response.json();
        console.warn(result);
        dispatch({
          type: CONFIRM_CART,
          cart: result,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  },
};
