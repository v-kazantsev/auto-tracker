import qs from 'qs';
import { apiInstance } from 'api/api-instance';
import { IDevicesAPI } from 'types/api';

export const DevicesAPI: IDevicesAPI = {
  getAllDevices: (ids) => apiInstance().get(`devices/${qs.stringify(ids, { arrayFormat: 'repeat', addQueryPrefix: true, skipNulls: true})}`),
  getDevice: (id) => apiInstance().get(`devices/${id}`),
  deleteDevice: (id) => apiInstance().delete(`devices/${id}`),
  addDevice: (device) => apiInstance().post('devices', device)
};
