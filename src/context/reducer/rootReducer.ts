import { combineReducers } from '@reduxjs/toolkit';

import buyingEditReducer from './buyingEditReducer';
import mapReducer from './mapReducer';
import knowingEditReducer from './knowingEditReducer';
import savingReducer from './savingReducer';
import buyingReducer from './buyingReducer';
import knowingReducer from './knowingReducer';
import menuReducer from './menuReducer';
import nicknameReducer from './nicknameReducer';
import messageReducer from './messageReducer';
import recyclingReducer from './recyclingReducer';
import recyclingEditReducer from './recyclingEditReducer';
import sharingReducer from './sharingReducer';
import sharingEditReducer from './sharingEditReducer';
import tradingReducer from './tradingReducer';
import mypageReducer from './mypageReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  saving: savingReducer,
  buying: buyingReducer,
  buyingEdit: buyingEditReducer,
  knowing: knowingReducer,
  knowingEdit: knowingEditReducer,
  map: mapReducer,
  nickname: nicknameReducer,
  message: messageReducer,
  recycling: recyclingReducer,
  recyclingEdit: recyclingEditReducer,
  sharing: sharingReducer,
  sharingEdit: sharingEditReducer,
  trading: tradingReducer,
  mypage: mypageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
