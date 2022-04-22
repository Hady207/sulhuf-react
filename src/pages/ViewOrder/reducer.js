import { createActions } from "reduxsauce";

export const { Types: ViewOrderTypes, Creators: ViewOrderActions } =
  createActions({
    orderReq: ["id"],
    orderRes: ["data"],
    orderFail: ["errorMessage"],
  });

export const initialState = {
  order: null,
  isLoading: false,
  errorMessage: null,
};

export const viewOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ViewOrderTypes.ORDER_REQ:
      return {
        ...state,
        isLoading: true,
        order: null,
        errorMessage: null,
      };
    case ViewOrderTypes.ORDER_RES:
      return {
        ...state,
        order: action.data,
        isLoading: false,
        errorMessage: null,
      };

    case ViewOrderTypes.ORDER_FAIL:
      return {
        ...state,
        order: null,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
