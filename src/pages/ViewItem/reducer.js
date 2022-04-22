import { createActions } from "reduxsauce";

export const { Types: ViewItemTypes, Creators: ViewItemActions } =
  createActions({
    itemReq: ["id"],
    itemRes: ["data"],
    itemFail: ["errorMessage"],
  });

export const initialState = {
  item: null,
  isLoading: false,
  errorMessage: null,
};

export const viewItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ViewItemTypes.ITEM_REQ:
      return {
        ...state,
        isLoading: true,
        item: null,
        errorMessage: null,
      };
    case ViewItemTypes.ITEM_RES:
      return {
        ...state,
        item: action.data,
        isLoading: false,
        errorMessage: null,
      };

    case ViewItemTypes.ITEM_FAIL:
      return {
        ...state,
        item: null,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
