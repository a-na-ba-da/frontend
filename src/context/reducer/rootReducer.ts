import { combineReducers } from '@reduxjs/toolkit';

import buyingEditReducer from './buyingEditReducer';
import mapReducer from './mapReducer';
import knowingEditReducer from './knowingEditReducer';
import savingReducer from './savingReducer';
import buyingReducer from './buyingReducer';
import knowingReducer from './knowingReducer';

const rootReducer = combineReducers({
  saving: savingReducer,
  buying: buyingReducer,
  buyingEdit: buyingEditReducer,
  knowing: knowingReducer,
  knowingEdit: knowingEditReducer,
  map: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
