import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/Reducer';
import adminOrderReducer from './Admin/Order/Reducer';
import cartReducer from './Cart/Reducer';
import customerCourseReducer from './Course/Reducer';
import ThemeReducer from './Theme/Reducer';
const rootReducers = combineReducers({
  auth: authReducer,
  theme: ThemeReducer,
  adminOrder: adminOrderReducer,
  course: customerCourseReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));




