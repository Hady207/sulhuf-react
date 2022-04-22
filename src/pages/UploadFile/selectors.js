import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const UploadSelector = (state) => state.upload ?? initialState;

export const selectErrorMessage = () =>
  createSelector(UploadSelector, (substate) => substate.errorMessage);

export const selectIsLoading = () =>
  createSelector(UploadSelector, (substate) => substate.isLoading);

const uploadSelectors = createStructuredSelector({
  isLoading: selectIsLoading(),
  errorMessage: selectErrorMessage(),
});

export default uploadSelectors;
