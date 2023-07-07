import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch } from '../context/store';
import { RootState } from '../context/reducer/rootReducer';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
