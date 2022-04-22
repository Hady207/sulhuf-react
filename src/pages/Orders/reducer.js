import { createActions } from "reduxsauce";

export const { Types: OrdersTypes, Creators: OrdersActions } = createActions({
  ordersReq: null,
  ordersRes: ["data"],
  ordersFail: ["errorMessage"],
});

export const initialState = {
  isLoading: false,
  ordersData: null,
  errorMessage: null,
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrdersTypes.ORDERS_REQ:
      return {
        ...state,
        isLoading: true,
        ordersData: null,
        errorMessage: null,
      };
    case OrdersTypes.ORDERS_RES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        ordersData: action.data,
      };
    case OrdersTypes.ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        ordersData: null,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
