import { combineReducers } from "redux";

import authReducer from "./authReducer";
import settingReducer from "./settingReducer";
import presetsReducer from "./presetsReducer";
import finalReducer from "./finalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  setting: settingReducer,
  storedPresets: presetsReducer,
  finalEv: finalReducer,
});

export default rootReducer;
