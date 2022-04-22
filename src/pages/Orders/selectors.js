import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const RootSelector = (state) => state.orders ?? initialState;

export const selectOrders = () =>
  createSelector(RootSelector, (substate) => substate.ordersData);

export const selectErrorMessage = () =>
  createSelector(RootSelector, (substate) => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(RootSelector, (substate) => substate.isLoading);

const itemSelectors = createStructuredSelector({
  orders: selectOrders(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default itemSelectors;
