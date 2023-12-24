import { createRoutine } from 'redux-saga-routines';

export const getDeviceListRoutine = createRoutine('DEVICE/GET_LIST');

export const deleteDeviceRoutine = createRoutine('DEVICE/DELETE');

export const addDeviceRoutine = createRoutine('DEVICE/ADD');
