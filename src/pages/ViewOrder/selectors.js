import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const RootSelector = (state) => state.viewOrder ?? initialState;

export const selectOrder = () =>
  createSelector(RootSelector, (substate) => substate.order);

export const selectErrorMessage = () =>
  createSelector(RootSelector, (substate) => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(RootSelector, (substate) => substate.isLoading);

const itemSelectors = createStructuredSelector({
  order: selectOrder(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default itemSelectors;
