import { orderType } from '../types';

const { GET_ORDER, REMOVE_ORDER } = orderType;

const initialState = {
  orders: [],
  selected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        orders: action.orders,
      };
    case REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.Id !== action.orderId),
      };
    default:
      return state;
  }
};
