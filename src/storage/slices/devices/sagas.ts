import { call, put, takeLatest } from 'redux-saga/effects';
import { DevicesAPI } from 'api/devices-api';
import { getDeviceListRoutine, deleteDeviceRoutine, addDeviceRoutine } from './actions';
import { openModal } from 'storage/slices/modal/actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { GridRowId } from '@mui/x-data-grid';

function* getDeviceListWorker() {
  const { request, success, failure, fulfill } = getDeviceListRoutine;

  try {
    yield put(request());
    const { data } = yield call(DevicesAPI.getAllDevices);
    yield put(success(data));

  } catch (error) {
    console.error(error);
    yield put(failure(error));

  } finally {
    yield put(fulfill());
  }
}

export function* getDeviceListWatcher() {
  yield takeLatest(getDeviceListRoutine.trigger, getDeviceListWorker);
}

function* deleteDeviceWorker(action: PayloadAction<{id: GridRowId}>) {
  const { request } = deleteDeviceRoutine;
  const { id } = action.payload;
  yield put(request(id));
  yield put(openModal());
}

export function* deleteDeviceWatcher() {
  yield takeLatest(deleteDeviceRoutine.trigger, deleteDeviceWorker);
}

function* addDeviceWorker() {
  yield put(openModal());
}

export function* addDeviceWatcher() {
  yield takeLatest(addDeviceRoutine.trigger, addDeviceWorker);
}
