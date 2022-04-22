import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const RootSelector = (state) => state.viewItem ?? initialState;

export const selectItem = () =>
  createSelector(RootSelector, (substate) => substate.item);

export const selectErrorMessage = () =>
  createSelector(RootSelector, (substate) => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(RootSelector, (substate) => substate.isLoading);

const itemSelectors = createStructuredSelector({
  item: selectItem(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default itemSelectors;
