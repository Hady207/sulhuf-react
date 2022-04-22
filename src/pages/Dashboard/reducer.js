import { createActions } from "reduxsauce";

export const { Types: DashboardTypes, Creators: DashboardActions } =
  createActions({
    requestHomeData: null,
    homeDataSuccess: ["data"],
    homeDataFail: ["errorMessage"],
    editData: ["selectItem"],
  });

export const initialState = {
  homeIsLoading: false,
  homeData: null,
  homeErrorMessage: null,
  selectedHomeData: null,
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DashboardTypes.REQUEST_HOME_DATA:
      return {
        ...state,
        homeIsLoading: true,
        selectedHomeData: null,
        homeErrorMessage: null,
      };
    case DashboardTypes.HOME_DATA_SUCCESS:
      return {
        ...state,
        homeIsLoading: false,
        selectedHomeData: null,
        homeErrorMessage: null,
        homeData: action.data,
      };
    case DashboardTypes.EDIT_DATA:
      return {
        ...state,
        selectedHomeData: action.selectItem,
      };
    case DashboardTypes.HOME_DATA_FAIL:
      return {
        ...state,
        homeIsLoading: false,
        selectedHomeData: null,
        homeErrorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
