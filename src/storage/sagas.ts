import { all } from '@redux-saga/core/effects';
import { getDeviceListWatcher } from 'storage/slices/devices/sagas';

function* rootSaga() {
  yield all([
    getDeviceListWatcher(),
  ])
}

export default rootSaga;