import { combineReducers } from '@reduxjs/toolkit';

import buyingEditReducer from './buyingEditReducer';
import mapReducer from './mapReducer';
import knowingEditReducer from './knowingEditReducer';

const rootReducer = combineReducers({
  buyingEdit: buyingEditReducer,
  knowingEdit: knowingEditReducer,
  map: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
