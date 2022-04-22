import { combineReducers } from "redux";

import { authReducer as auth } from "../pages/Auth/reducer";
import { rootReducer as root } from "../pages/Root/reducer";
import { createItemReducer as createItem } from "../pages/CreateItem/reducer";
import { updateItemReducer as updateItem } from "../pages/EditItem/reducer";
import { dashboardReducer as dashboard } from "../pages/Dashboard/reducer";
import { ordersReducer as orders } from "../pages/Orders/reducer";
import { viewItemReducer as viewItem } from "../pages/ViewItem/reducer";
import { viewOrderReducer as viewOrder } from "../pages/ViewOrder/reducer";
import { uploadReducer as upload } from "../pages/UploadFile/reducer";

const rootReducer = combineReducers({
  auth,
  root,
  dashboard,
  createItem,
  updateItem,
  orders,
  viewItem,
  viewOrder,
  upload,
});

export default rootReducer;
