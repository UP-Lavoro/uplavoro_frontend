import { combineReducers } from "redux";
import authReducer from './slices/auth/authSlice'
import userReducer from './slices/user/userSlice'
import adminReducer from './slices/admin/adminSlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  admin: adminReducer,
});
