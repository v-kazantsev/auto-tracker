import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import deviceListReducer from 'storage/slices/devices/reducer';
import { modalReducer } from 'storage/slices/modal/reducer';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  devices: deviceListReducer,
  modal: modalReducer
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware): any =>
    getDefaultMiddleware().concat(middlewares)
})

sagaMiddleware.run(rootSaga)

export { store }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
