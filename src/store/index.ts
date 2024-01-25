import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  todos: {}
});

// 최상위 컴포넌트에서 사용
const store = configureStore({
  reducer: rootReducer
});

// useSelector와 useDispatch의 타입
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// 타입을 적용한 useSelector와 useDispatch
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
