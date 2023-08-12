import { combineReducers } from '@reduxjs/toolkit';

import buyingEditReducer from './buyingEditReducer';
import mapReducer from './mapReducer';
import knowingEditReducer from './knowingEditReducer';
import savingReducer from './savingReducer';
import buyingReducer from './buyingReducer';
import knowingReducer from './knowingReducer';
import menuReducer from './menuReducer';
import sharingReducer from './sharingReducer';
import sharingEditReducer from './sharingEditReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  saving: savingReducer,
  buying: buyingReducer,
  buyingEdit: buyingEditReducer,
  knowing: knowingReducer,
  knowingEdit: knowingEditReducer,
  map: mapReducer,
  sharing: sharingReducer,
  sharingEdit: sharingEditReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
