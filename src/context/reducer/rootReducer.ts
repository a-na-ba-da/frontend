import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // counter: counterReducer,
  // 추가 리듀서
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
