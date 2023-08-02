import { combineReducers } from '@reduxjs/toolkit';

import buyingEditReducer from './buyingEditReducer';
import mapReducer from './mapReducer';
import knowingEditReducer from './knowingEditReducer';
import savingReducer from './savingReducer';

const rootReducer = combineReducers({
  saving: savingReducer,
  buyingEdit: buyingEditReducer,
  knowingEdit: knowingEditReducer,
  map: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
