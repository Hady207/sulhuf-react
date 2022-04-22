import { createActions } from "reduxsauce";

export const { Types: UploadTypes, Creators: UploadActions } = createActions({
  uploadReq: ["file"],
  uploadRes: null,
});

export const initialState = {
  isLoading: false,
};

export const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UploadTypes.UPLOAD_REQ:
      return {
        ...state,
        isLoading: true,
      };

    case UploadTypes.UPLOAD_RES:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
