import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import enterpriseReducer from "./enterpriseReducer";
import branchReducer from "./branchReducer";
import foodReducer from "./foodReducer";
import settingsReducer from "./settingsReducer";
import orderReducer from "./orderReducer";
import dispatchReducer from "./dispatchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  food: foodReducer,
  enterprise: enterpriseReducer,
  branch: branchReducer,
  settings: settingsReducer,
  orders: orderReducer,
  dispatchs: dispatchReducer
});

export default rootReducer;
