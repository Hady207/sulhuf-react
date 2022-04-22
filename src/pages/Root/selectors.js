import { createSelector, createStructuredSelector } from "reselect";
import { initialState } from "./reducer";

const RootSelector = (state) => state.root ?? initialState;

export const selectUserProfile = () =>
  createSelector(RootSelector, (substate) => substate.userProfile);

export const selectAccessToken = () =>
  createSelector(RootSelector, (substate) => substate.accessToken);

const rootSelectors = createStructuredSelector({
  userProfile: selectUserProfile(),
  accessToken: selectAccessToken(),
});

export default rootSelectors;
