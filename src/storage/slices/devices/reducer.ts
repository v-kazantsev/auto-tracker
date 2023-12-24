import { getDeviceListRoutine } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './state';
import { Device } from 'types/models';

const deviceListReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getDeviceListRoutine.REQUEST, (state) => {
    state.isLoading = true;
    state.error = undefined;
  })
  .addCase(getDeviceListRoutine.SUCCESS, (state, action: {type: string, payload: { data: Array<Device>}}) => {
    state.data = action.payload.data;
  })
  .addCase(getDeviceListRoutine.FAILURE, (state, action: {type: string, payload: string}) => {
    state.error = action.payload;
  })
  .addCase(getDeviceListRoutine.FULFILL, (state) => {
    state.isLoading = false;
  })
});

export default deviceListReducer;