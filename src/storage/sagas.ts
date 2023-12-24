import { all } from '@redux-saga/core/effects';
import { getDeviceListWatcher, deleteDeviceWatcher, addDeviceWatcher } from 'storage/slices/devices/sagas';

function* rootSaga() {
  yield all([
    getDeviceListWatcher(),
    deleteDeviceWatcher(),
    addDeviceWatcher()
  ])
}

export default rootSaga;