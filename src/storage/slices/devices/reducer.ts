import { createReducer } from '@reduxjs/toolkit';
import { GridRowId } from '@mui/x-data-grid';
import { initialState } from './state';
import { Device } from 'types/models';
import { getDeviceListRoutine, deleteDeviceRoutine } from './actions';

const deviceListReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(getDeviceListRoutine.REQUEST, (state) => {
    state.isLoading = true;
    state.error = undefined;
  })
  .addCase(getDeviceListRoutine.SUCCESS, (state, action: {type: string, payload: Array<Device>}) => {
    state.data = action.payload;
  })
  .addCase(getDeviceListRoutine.FAILURE, (state, action: {type: string, payload: string}) => {
    state.error = action.payload;
  })
  .addCase(getDeviceListRoutine.FULFILL, (state) => {
    state.isLoading = false;
  })
  .addCase(deleteDeviceRoutine.REQUEST, (state, action: {type: string, payload: { id: GridRowId}}) => {
    state.error = undefined;
  })
});

export default deviceListReducer;