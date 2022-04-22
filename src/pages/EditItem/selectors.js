import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const RootSelector = (state) => state.updateItem ?? initialState;

export const selectSuccessMessage = () =>
  createSelector(RootSelector, (substate) => substate.successMessage);

export const selectErrorMessage = () =>
  createSelector(RootSelector, (substate) => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(RootSelector, (substate) => substate.isLoading);

const updateItemSelectors = createStructuredSelector({
  successMessage: selectOrders(),
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default updateItemSelectors;
