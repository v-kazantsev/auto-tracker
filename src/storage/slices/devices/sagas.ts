import { call, put, takeLatest } from 'redux-saga/effects';
import { DevicesAPI } from 'api/devices-api';
import { getDeviceListRoutine } from './actions';

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